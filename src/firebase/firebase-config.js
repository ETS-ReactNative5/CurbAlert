import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCl7o_F4xArPllS1WEzkOdh2Ga_sgG2Aj0',
  authDomain: 'curbalert-343207.firebaseapp.com',
  projectId: 'curbalert-343207',
  storageBucket: 'curbalert-343207.appspot.com',
  messagingSenderId: '267306659613',
  appId: '1:267306659613:web:a5ac5e23a3d3a48ef17bf4',
  measurementId: 'G-RLKYDM24MQ',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
