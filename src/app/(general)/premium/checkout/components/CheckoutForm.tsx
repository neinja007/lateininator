import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin + '/premium/success'
      }
    });

    if (stripeError) {
      setErrorMessage(stripeError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className='mt-4 rounded-xl bg-gradient-to-br from-pink-500 to-blue-700 p-7'>
      <form onSubmit={handleSubmit}>
        {clientSecret && <PaymentElement options={{ layout: 'tabs' }} onReady={() => setLoading(false)} />}
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <div className='flex justify-center'>
          <button
            type='submit'
            className='mt-5 rounded-lg bg-purple-700 px-3 py-1.5 text-white shadow-md shadow-purple-300 transition-all hover:bg-purple-600 hover:shadow-white disabled:animate-pulse disabled:opacity-50'
            disabled={!stripe || loading}
          >
            {loading ? 'Wird geladen...' : '7-Tage Testlauf starten'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
