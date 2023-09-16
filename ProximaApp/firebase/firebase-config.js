// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage} from "firebase/storage";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDePLxwYeDzHSGOj4b70cWAGoY9gIjjIF4",
  authDomain: "login-auth-b03f2.firebaseapp.com",
  projectId: "login-auth-b03f2",
  storageBucket: "login-auth-b03f2.appspot.com",
  messagingSenderId: "756059655475",
  appId: "1:756059655475:web:1ef1acc0a28ff2a0574246"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);
export const firestore = getFirestore(app);
export const storage=getStorage(app);
