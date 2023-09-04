// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-irtNhzBhVl_qLpdihHLkvvtPvYFRFe8",
  authDomain: "eisenhours-4670d.firebaseapp.com",
  projectId: "eisenhours-4670d",
  storageBucket: "eisenhours-4670d.appspot.com",
  messagingSenderId: "586964412947",
  appId: "1:586964412947:web:7226e0703c4594a0282de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;