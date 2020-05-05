import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utilities.jsx';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropDown from '../cart-dropDown/cart-dropDown.component.jsx';
import { ReactComponent as Logo } from '../../assets/original.svg';
import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
