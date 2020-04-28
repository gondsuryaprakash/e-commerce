import React from 'react';
import './custom-button.style.scss';
const Button = ({ children, isGoogleSignIn, ...restProps }) => {
  return (
    <div
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </div>
  );
};
export default Button;
