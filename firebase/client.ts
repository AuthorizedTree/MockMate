import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBPUTYgs4gOBd8f7dGlILA7TuxBxz5ZtEk",
  authDomain: "codefriend-d626c.firebaseapp.com",
  projectId: "codefriend-d626c",
  storageBucket: "codefriend-d626c.firebasestorage.app",
  messagingSenderId: "608514143286",
  appId: "1:608514143286:web:ceddb47caa082326a05497",
  measurementId: "G-YTZEY829JD"
};


// Initialize Firebase

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);