import React from 'react';
import './checkOut.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import CheckOutItem from './checkout-item.component.jsx';
import CheckOutButton, {
  StripeCheckOutButton,
} from '../../components/Stripe/stripe.component.jsx';

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Discription</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>
      ))}
      <div className='total'>{`TOTAL: ${total}`}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 -Exp:01/20 -CVV:123
      </div>
      <StripeCheckOutButton price={total} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
