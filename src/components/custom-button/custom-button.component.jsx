import React from 'react';
import './custom-button.style.scss';
const Button = ({ children, isGoogleSignIn, inverted,...restProps }) => {
  return (
    <div
      className={`${inverted ? 'inverted' : ''}  ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </div>
  );
};
export default Button;
