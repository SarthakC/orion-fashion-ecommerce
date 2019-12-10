import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jR2H0wY3KQNtZHEUyGQ0O7WL';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert('Payment Error');
      });
  };
  return (
    <StripeCheckout
      billingAddress
      shippingAddress
      label='Pay Now'
      name='Orion Fashion'
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
