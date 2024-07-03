// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { process } from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-blog-6e048.firebaseapp.com",
  projectId: "mern-blog-6e048",
  storageBucket: "mern-blog-6e048.appspot.com",
  messagingSenderId: "688095348401",
  appId: "1:688095348401:web:0f16050f861df5a3b0c490",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
