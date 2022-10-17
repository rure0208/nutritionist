// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAttAudwxfOHqii66F7DOTPZM2joBm0s1I",
  authDomain: "alimentos-b401e.firebaseapp.com",
  databaseURL: "https://alimentos-b401e-default-rtdb.firebaseio.com",
  projectId: "alimentos-b401e",
  storageBucket: "alimentos-b401e.appspot.com",
  messagingSenderId: "291893606049",
  appId: "1:291893606049:web:e9a2f1ccac01dd9b2e62e0",
  measurementId: "G-SQGJ3SE7H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;