import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg5UoBBILnEwG0GxxRoPdH68SjlrLBagU",
  authDomain: "fir-62c8e.firebaseapp.com",
  projectId: "fir-62c8e",
  storageBucket: "fir-62c8e.appspot.com",
  messagingSenderId: "315027349601",
  appId: "1:315027349601:web:a99b3ed4243effb6634a20",
  measurementId: "G-0DCR5GNNJ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};