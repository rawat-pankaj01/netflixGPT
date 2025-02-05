// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcQI6a_1bins800-M8JzxFT4_CzC6gGpQ",
  authDomain: "netflixgpt-3818d.firebaseapp.com",
  projectId: "netflixgpt-3818d",
  storageBucket: "netflixgpt-3818d.firebasestorage.app",
  messagingSenderId: "181734622989",
  appId: "1:181734622989:web:d550ea8ecbc318dfce5244",
  measurementId: "G-QGWVFJMLKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();