import { useState } from 'react';
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase';

import Input from '../../components/form/Input';
import Button from '../button/Button';

import './sign-in-form.styles.scss';

const defaultFormfield = {
  email: '',
  password: '',
};

export default function SignIn() {
  const [formField, setFormField] = useState(defaultFormfield);
  const { email, password } = formField;

  const signInGoogle = async (signInMethod) => {
    const { user } = await signInMethod();
    const userDocRef = await createUserDocFromAuth(user);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='signinContainer'>
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <Input type='email' label='Email' name='email' value={email} onChange={handleChange} required />
        <Input type='password' label='Password' name='password' value={password} onChange={handleChange} required />
        <div className='buttonWrapper'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={() => signInGoogle(signInWithGooglePopup)}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
