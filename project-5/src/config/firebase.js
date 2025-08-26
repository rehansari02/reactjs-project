// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUg9CcT342oL5VkEYp2BfKvnxaK5IcA0",
  authDomain: "react-contact-5fece.firebaseapp.com",
  projectId: "react-contact-5fece",
  storageBucket: "react-contact-5fece.firebasestorage.app",
  messagingSenderId: "921758252884",
  appId: "1:921758252884:web:2b64dcbae84e98ab9d52c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
