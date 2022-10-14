// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWJEfuTYZ-uKXtvxPgKj7omU1JPfEs0Y",
  authDomain: "you-chat-183ca.firebaseapp.com",
  projectId: "you-chat-183ca",
  storageBucket: "you-chat-183ca.appspot.com",
  messagingSenderId: "556534961231",
  appId: "1:556534961231:web:d397a7f077954c3da1863a",
  measurementId: "G-C8H5VKDEKX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
