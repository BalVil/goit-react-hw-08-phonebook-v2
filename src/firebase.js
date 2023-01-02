import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCaKT8X3oBo_fkHrtIlu92yA2OgbhyRAb0',
  authDomain: 'balvil-phonebook.firebaseapp.com',
  projectId: 'balvil-phonebook',
  storageBucket: 'balvil-phonebook.appspot.com',
  messagingSenderId: '335989863400',
  appId: '1:335989863400:web:286e9b6a04f5b16b25ea5d',
  measurementId: 'G-WHR4J9B4VV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
