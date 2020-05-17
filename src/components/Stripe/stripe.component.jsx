import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
export const StripeCheckOutButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey = 'pk_test_uvA2XjSkZuhjuCuKHvBKlHrK00rSp5hRCx';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesfull');
  };

  return (
    <div>
      <StripeCheckOut
        label='Pay Now'
        name='Surya'
        billingAddress
        shippingAddress
        image='https://svgur.com/i/CUz'
        description={`Your total is $${price}`}
        amount={priceStripe}
        token={onToken}
        stripeKey={publishableKey}
        panelLabel='Pay Now'
      />
    </div>
  );
};

export default StripeCheckOutButton;
