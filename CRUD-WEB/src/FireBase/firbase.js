// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp3-Db3gLA_x-58QU3SReKEvZj0iIRkmo",
  authDomain: "crud-app-react-9677c.firebaseapp.com",
  projectId: "crud-app-react-9677c",
  storageBucket: "crud-app-react-9677c.firebasestorage.app",
  messagingSenderId: "312614942667",
  appId: "1:312614942667:web:5e4e7ff4b6aec066e8684e",
  measurementId: "G-EYBQFCVZ4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };