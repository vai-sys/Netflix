// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC286pg2FmbaiwnjxVh8e4AVdMS3kLxruA",
  authDomain: "netflixgpt05.firebaseapp.com",
  projectId: "netflixgpt05",
  storageBucket: "netflixgpt05.appspot.com",
  messagingSenderId: "77568366464",
  appId: "1:77568366464:web:94b99e0c195e9b94761365",
  measurementId: "G-3ZVQ3D9RTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);