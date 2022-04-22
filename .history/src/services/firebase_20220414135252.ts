import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDEirdv6tGG2TuHi3m8uMBmSxtowXBMcsM",
  authDomain: "letmeask-74f03.firebaseapp.com",
  databaseURL: "https://letmeask-74f03-default-rtdb.firebaseio.com",
  projectId: "letmeask-74f03",
  storageBucket: "letmeask-74f03.appspot.com",
  messagingSenderId: "53957397861",
  appId: "1:53957397861:web:591f3bf7df9fe76d2f258c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();