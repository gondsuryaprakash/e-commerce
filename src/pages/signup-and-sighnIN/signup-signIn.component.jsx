import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/signUp/sign-up.component.jsx';
import './signup-sighnIn.style.style.scss';
const SighnUpandSighnIn = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SighnUpandSighnIn;
