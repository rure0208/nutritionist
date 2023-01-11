// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBfkQ0Cbk2LUERMbEZ3sMORTE3VKm3g30",
  authDomain: "nutricionista-8f435.firebaseapp.com",
  projectId: "nutricionista-8f435",
  storageBucket: "nutricionista-8f435.appspot.com",
  messagingSenderId: "437848396367",
  appId: "1:437848396367:web:a2b9923d93c22fecc5903a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
