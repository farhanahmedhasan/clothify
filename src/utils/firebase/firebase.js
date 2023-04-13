import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfUSTg1JcvAG_vvbqT39cxhcKXUsL8ql0',
  authDomain: 'clothify-db-react.firebaseapp.com',
  projectId: 'clothify-db-react',
  storageBucket: 'clothify-db-react.appspot.com',
  messagingSenderId: '556400498787',
  appId: '1:556400498787:web:a210ba6ccf489c88d5c056',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
