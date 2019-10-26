import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADJVrMGsVI3Al-PQF2b1imWM8Q1Zmhb_A',
  authDomain: 'orion-fashion.firebaseapp.com',
  databaseURL: 'https://orion-fashion.firebaseio.com',
  projectId: 'orion-fashion',
  storageBucket: 'orion-fashion.appspot.com',
  messagingSenderId: '352659385804',
  appId: '1:352659385804:web:308eaa2e5c4fb5c6894169',
  measurementId: 'G-FKF1QG74GL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
