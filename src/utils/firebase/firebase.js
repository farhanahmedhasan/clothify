import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
// const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });
// facebookProvider.setCustomParameters({ display: 'popup' });

export const auth = getAuth();
auth.languageCode = 'it';

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
