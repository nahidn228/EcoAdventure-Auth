// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0iAR2--_lrS9KNJYzmzKNlFCMon0aNBw",
  authDomain: "fusiondeck-228.firebaseapp.com",
  projectId: "fusiondeck-228",
  storageBucket: "fusiondeck-228.firebasestorage.app",
  messagingSenderId: "437886437620",
  appId: "1:437886437620:web:34847c0b051671c42fb6a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);