import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD2qzGf7vyjBxG7GSg-POEOCjxv0Qm52qc',
  authDomain: 'ecommerce-e39b2.firebaseapp.com',
  databaseURL: 'https://ecommerce-e39b2.firebaseio.com',
  projectId: 'ecommerce-e39b2',
  storageBucket: 'ecommerce-e39b2.appspot.com',
  messagingSenderId: '576338467748',
  appId: '1:576338467748:web:a4c71a5c0f60ae22bf3f31',
  measurementId: 'G-BP2VGPEGYW',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('createUserProfileDocument');
  if (!userAuth) return;

  const userRef = fireStore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
