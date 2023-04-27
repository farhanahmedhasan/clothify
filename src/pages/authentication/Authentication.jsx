import SignUpForm from '../../components/sign-up/SignUpForm';
import SignIn from '../../components/sign-in/SignIn';

import './auth.styles.scss';

export default function Authentication() {
  return (
    <div className='authContainer'>
      <SignIn />
      <SignUpForm />
    </div>
  );
}
