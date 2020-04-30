import React, { Component } from 'react';
import './sign-in.style.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utilities.jsx';
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../custom-button/custom-button.component.jsx';
export default class SignIm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (e) {
      console.log(e);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h1 className='title'>I already have an account </h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='Password'
          />
          <div className='buttons'>
            <Button type='submit' onClick={this.handleSubmit}>
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
