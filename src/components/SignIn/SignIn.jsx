import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

export class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action='' method='post' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
