import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart.item.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-DropDown.style.scss';
const Cart = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>
      <CustomButton>Go to CheckOut</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
