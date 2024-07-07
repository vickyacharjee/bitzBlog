// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogbitz-6b074.firebaseapp.com",
  projectId: "blogbitz-6b074",
  storageBucket: "blogbitz-6b074.appspot.com",
  messagingSenderId: "898660364177",
  appId: "1:898660364177:web:ba23a0a37afcc9bafc3430",
  measurementId: "G-TL31N8CRKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


