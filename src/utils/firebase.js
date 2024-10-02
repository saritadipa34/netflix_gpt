// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTFf2ztBa2ZcmeOoHtMvbwx5IIW-_O28",
  authDomain: "netflix-gpt-2fb8b.firebaseapp.com",
  projectId: "netflix-gpt-2fb8b",
  storageBucket: "netflix-gpt-2fb8b.appspot.com",
  messagingSenderId: "328158324036",
  appId: "1:328158324036:web:1b86d64dbdcdd2f0ea2311",
  measurementId: "G-BSPNS2E046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
