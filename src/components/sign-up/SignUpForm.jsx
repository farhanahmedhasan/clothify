import { useState } from 'react';
import { createAuthUserFromEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase';
import Input from '../form/Input';

const defaultFormfield = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormfield);

  const { displayName, email, password, confirmPassword } = formField;

  function resetForm() {
    setFormField(defaultFormfield);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserFromEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists');
      }
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form className='form' onSubmit={handleSubmit}>
        <Input
          label='Display Name'
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />

        <Input label='Email' type='email' name='email' value={email} onChange={handleChange} required />

        <Input label='Password' type='password' name='password' value={password} onChange={handleChange} required />

        <Input
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
