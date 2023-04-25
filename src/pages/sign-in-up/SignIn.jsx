import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase';
import SignUpForm from '../../components/sign-up/SignUpForm';

export default function SignIn() {
  const logGoogleUser = async (signInMethod) => {
    const { user } = await signInMethod();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={() => logGoogleUser(signInWithGooglePopup)}>Google sign in</button>
      <SignUpForm />
    </>
  );
}
