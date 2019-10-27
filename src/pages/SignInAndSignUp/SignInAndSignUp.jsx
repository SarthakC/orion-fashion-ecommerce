import React from 'react';
import './SignInAndSignUp.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInAndSignUp;
