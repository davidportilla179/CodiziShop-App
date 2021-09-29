// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwOixgta3f0ss_RmMZHuzHmPn6GtHe_NE",
  authDomain: "codizishop.firebaseapp.com",
  projectId: "codizishop",
  storageBucket: "codizishop.appspot.com",
  messagingSenderId: "889303699321",
  appId: "1:889303699321:web:016e7dcc431b8d644169a8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const db = getFirestore(app);