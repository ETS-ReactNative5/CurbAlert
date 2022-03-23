import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'REACT_APP_FIREBASE_API_KEY',
  authDomain: 'curbalert-343207.firebaseapp.com',
  projectId: 'curbalert-343207',
  storageBucket: 'curbalert-343207.appspot.com',
  messagingSenderId: '267306659613',
  appId: '1:267306659613:web:a5ac5e23a3d3a48ef17bf4',
  measurementId: 'G-RLKYDM24MQ',
};

const app = initializeApp(firebaseConfig);
const storage = firebase.storage();
export const authentication = getAuth(app);
export const db = getFirestore(app);
export {storage, firebase as default};
