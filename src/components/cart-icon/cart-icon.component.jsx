import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoping_bag.svg';
import { toggleCardHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCardHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCardHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
