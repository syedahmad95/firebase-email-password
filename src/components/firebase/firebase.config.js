import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHml4G_-wyWL9DjPSHxh796BdI-W25hC8",
  authDomain: "email-password-auth-c72d2.firebaseapp.com",
  projectId: "email-password-auth-c72d2",
  storageBucket: "email-password-auth-c72d2.appspot.com",
  messagingSenderId: "464935847948",
  appId: "1:464935847948:web:d10181d12048896f460629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;