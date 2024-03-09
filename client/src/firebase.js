// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,TwitterAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "social-app-b491a.firebaseapp.com",
  projectId: "social-app-b491a",
  storageBucket: "social-app-b491a.appspot.com",
  messagingSenderId: "590404297097",
  appId: "1:590404297097:web:27a92f70bfd49ccc62c158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export default app