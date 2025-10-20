// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1JN5VK8WQTYLKcLjcUU_ZVDSAc49UcFU",
  authDomain: "dragon-news-auth-39491.firebaseapp.com",
  projectId: "dragon-news-auth-39491",
  storageBucket: "dragon-news-auth-39491.firebasestorage.app",
  messagingSenderId: "125817014793",
  appId: "1:125817014793:web:d2b4ef6b892c2945b006d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;