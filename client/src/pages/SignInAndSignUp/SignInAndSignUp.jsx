import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import { SignInAndSignUpContainer } from './SignInAndSignUpStyles';

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
