import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBSsd1E9dgvfEDcLKSme66Srmma39r1gxc",
  authDomain: "react-shop-db-f4c67.firebaseapp.com",
  databaseURL: "https://react-shop-db-f4c67.firebaseio.com",
  projectId: "react-shop-db-f4c67",
  storageBucket: "react-shop-db-f4c67.appspot.com",
  messagingSenderId: "947875904422",
  appId: "1:947875904422:web:7b041a6b054db6743bad67",
  measurementId: "G-Q1EKRWT0HV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;