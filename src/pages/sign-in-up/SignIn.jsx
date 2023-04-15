import { signInWithGooglePopup } from '../../utils/firebase/firebase';
export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user);
  };

  const logFaceookUser = async () => {
    signInWithFacebookPopup().catch(function (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        console.log(err); //TODO: Fix this issue in near future
      }
    });
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Google sign in</button>
      {/* <button onClick={logFaceookUser}>Facebook sign in</button> */}
    </>
  );
}
