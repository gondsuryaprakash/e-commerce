import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoping_bag.svg';
import { toggleCardHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
const CartIcon = ({ toggleCardHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCardHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
