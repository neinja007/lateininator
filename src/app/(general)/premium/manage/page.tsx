'use client';

import Heading from '@/components/Heading';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { Card } from './components/Card';
import FailToLoad from '@/components/FailToLoad';
import { useEffect } from 'react';
import { useSubscription } from '@/hooks/database/useSubscription';

const Page = () => {
  const queryClient = useQueryClient();

  const { subscription, isLoading } = useSubscription();

  const router = useRouter();

  const { mutate: cancelSubscription, isPending: isCancelPending } = useMutation({
    mutationFn: () => axios.patch('/api/subscription', { cancel: true }).then((res) => res.data),
    onMutate: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
      queryClient.invalidateQueries({ queryKey: ['dbUser'] });
    }
  });

  const user = useUser();

  useEffect(() => {
    if (!isLoading && !subscription) {
      router.push('/premium/overview');
    }
  }, [isLoading, subscription, router]);

  if (user.isLoaded && !user.isSignedIn) {
    return <RedirectToSignIn />;
  }

  const status = subscription && subscription.status;
  const active = status === 'active' || status === 'trialing';

  const nextPaymentDate = active && dayjs.unix(subscription.current_period_end).format('DD.MM.YYYY');
  const nextPaymentDays = active && dayjs.unix(subscription.current_period_end).diff(dayjs(), 'days');
  const nextPaymentAmount = active && subscription.plan && (subscription.plan.amount / 100).toFixed(2);
  const trialEnd = active && dayjs.unix(subscription.trial_end).format('DD.MM.YYYY');

  return (
    <div>
      <Heading>Abo Verwalten</Heading>
      <div className='flex justify-center'>
        {isLoading ? (
          <Card
            loading
            active
            isCancelPending={false}
            nextPaymentAmount={0}
            nextPaymentDays={0}
            nextPaymentDate=''
            trialEnd=''
            status=''
            cancelSubscription={() => {}}
          />
        ) : nextPaymentDays && nextPaymentDate && trialEnd ? (
          <Card
            active={active}
            nextPaymentAmount={nextPaymentAmount}
            nextPaymentDays={nextPaymentDays}
            nextPaymentDate={nextPaymentDate}
            trialEnd={trialEnd}
            status={status}
            cancelSubscription={cancelSubscription}
            isCancelPending={isCancelPending}
          />
        ) : (
          <FailToLoad />
        )}
      </div>
    </div>
  );
};

export default Page;
