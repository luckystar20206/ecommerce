// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA49qYtPdChqhXYkWblMaU8xXyHmA2spiE",
  authDomain: "react-authentication-8830c.firebaseapp.com",
  projectId: "react-authentication-8830c",
  storageBucket: "react-authentication-8830c.appspot.com",
  messagingSenderId: "519218978600",
  appId: "1:519218978600:web:e79c0f53595435e461fa1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app