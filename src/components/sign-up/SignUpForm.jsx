import { useState } from 'react';
import { createAuthUserFromEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase';

export default function SignUpForm() {
  const [formField, setFormField] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = formField;

  function resetForm() {
    setFormField({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='displayName'>Display Name</label>
          <input type='text' name='displayName' id='displayName' value={displayName} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
