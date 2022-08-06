// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHdjESEyAk1WqLkB3qHYqNx15L6RNmi_Y",
  authDomain: "todo-app-ff770.firebaseapp.com",
  projectId: "todo-app-ff770",
  storageBucket: "todo-app-ff770.appspot.com",
  messagingSenderId: "777283246400",
  appId: "1:777283246400:web:36921797529b511b49c2a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);