import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9wDCC8VXiBTDGMTcTht7x4SZ7HX5awVc",
    authDomain: "linkedin-clone-48da3.firebaseapp.com",
    projectId: "linkedin-clone-48da3",
    storageBucket: "linkedin-clone-48da3.appspot.com",
    messagingSenderId: "299695324413",
    appId: "1:299695324413:web:d0d78679d18ba1b8255294",
    measurementId: "G-X3EFFNJPPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
