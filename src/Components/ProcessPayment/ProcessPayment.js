import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(
   'pk_test_51IhTvqG8HUurb2Wjynm30mAf8k5272iYOHFD1unUt3keYX9UW4DGfCNnYAdT7K2YPHDW3srWT0OgYUCKn6KZ4hk600n62OnHqW'
);

const ProcessPayment = ({ id }) => {
   return (
      <Elements stripe={stripePromise}>
         <PaymentForm id={id} />
      </Elements>
   );
};

export default ProcessPayment;