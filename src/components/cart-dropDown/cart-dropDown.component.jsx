import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './cart-DropDown.style.scss';
const Cart = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>Go to CheckOut</CustomButton>
      </div>
    </div>
  );
};

export default Cart;
