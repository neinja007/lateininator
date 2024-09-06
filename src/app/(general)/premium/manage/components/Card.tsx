import Button from '@/components/Button';
import Hr from '@/components/Hr';
import Skeleton from '@/components/Skeleton';

type CardProps = {
  active: boolean;
  nextPaymentAmount: number;
  nextPaymentDays: number;
  nextPaymentDate: string;
  trialEnd: string;
  status: string;
  cancelSubscription: () => void;
  isCancelPending: boolean;
  loading?: boolean;
};

export const Card = ({
  active,
  nextPaymentAmount,
  nextPaymentDays,
  nextPaymentDate,
  trialEnd,
  status,
  cancelSubscription,
  isCancelPending,
  loading
}: CardProps) => {
  return (
    <div className='w-full max-w-[400px] rounded-lg bg-blue-200 p-4 dark:bg-blue-950'>
      <div className='w-full text-center'>
        {active ? (
          <>
            <p className='text-xl font-medium'>Nächste Abrechnung</p>
            {loading ? (
              <Skeleton pulse customSize className='mt-2 h-6 w-full' />
            ) : (
              <p className='h-6'>
                <b>{nextPaymentAmount}€</b> in{' '}
                <b>
                  {nextPaymentDays} {nextPaymentDays === 1 ? 'Tag' : 'Tagen'}
                </b>{' '}
                ({nextPaymentDate})
              </p>
            )}
          </>
        ) : (
          <span className='break-words text-red-400'>Ihr Abo wurde pausiert.</span>
        )}
      </div>
      {!loading && status === 'trialing' && (
        <>
          <Hr className='my-5' />
          <p className='text-center text-xl font-medium text-yellow-600 dark:text-yellow-500'>
            Sie befinden sich im Testlauf
          </p>
          <p className='w-full break-words text-center'>
            Der Testlauf endet am <b>{trialEnd}</b>.
          </p>
        </>
      )}
      <Hr className='my-5' />
      <Button
        onClick={() => {
          cancelSubscription();
        }}
        disabled={isCancelPending || loading}
        color='red'
        className='w-full'
      >
        Abo beenden
      </Button>
    </div>
  );
};
