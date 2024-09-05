const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const getStripeUserById = async (stripeCustomerId: string) => {
  try {
    const stripeUser = await stripe.customers.retrieve(stripeCustomerId);

    if (!stripeUser) {
      throw new Error('Stripe user not found');
    }

    return stripeUser;
  } catch (error) {
    console.error('Error fetching Stripe user:', error);
    throw error;
  }
};
