'use client';

import Heading from '@/components/Heading';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { Card } from './components/Card';

export const Page = () => {
  const queryClient = useQueryClient();

  const { data: subscription, isLoading } = useQuery({
    queryKey: ['subscription'],
    queryFn: () => axios.get('/api/subscription').then((res) => res.data.data)
  });

  const router = useRouter();

  const { mutate: pauseSubscription, isPending: isPausePending } = useMutation({
    mutationFn: () => axios.patch('/api/subscription', { cancel: true }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
      queryClient.invalidateQueries({ queryKey: ['dbUser'] });
      router.push('/premium/overview');
    }
  });

  const user = useUser();

  if (!isLoading && !subscription) {
    router.push('/premium/overview');
    return null;
  }

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
            isPausePending={false}
            nextPaymentAmount={0}
            nextPaymentDays={0}
            nextPaymentDate=''
            trialEnd=''
            status=''
            pauseSubscription={() => {}}
          />
        ) : nextPaymentDays && nextPaymentDate && trialEnd ? (
          <Card
            active={active}
            nextPaymentAmount={nextPaymentAmount}
            nextPaymentDays={nextPaymentDays}
            nextPaymentDate={nextPaymentDate}
            trialEnd={trialEnd}
            status={status}
            pauseSubscription={pauseSubscription}
            isPausePending={isPausePending}
          />
        ) : (
          <div>Ein Fehler ist aufgetreten</div>
        )}
      </div>
    </div>
  );
};

export default Page;
