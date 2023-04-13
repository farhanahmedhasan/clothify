import { signInWithGooglePopup } from '../../utils/firebase/firebase';

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user);
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Google sign in</button>
    </>
  );
}
