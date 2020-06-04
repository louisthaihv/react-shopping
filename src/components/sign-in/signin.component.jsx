import React from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    console.log(this.state);
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>
          I already have an account
        </h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>
              Sign In
            </CustomButton>
            
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>

        </form>

      </div>
    )
  }
}

export default SignIn;