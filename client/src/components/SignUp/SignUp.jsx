import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignUp.scss';
import { signUpStart } from '../../redux/user/userActions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
