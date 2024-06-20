// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt7iG9ZgOJpeukhdvTlQt561QUnW-FJQA",
  authDomain: "employee-directory-a969e.firebaseapp.com",
  projectId: "employee-directory-a969e",
  storageBucket: "employee-directory-a969e.appspot.com",
  messagingSenderId: "791960311895",
  appId: "1:791960311895:web:9ade799e54696c02e26b12",
  measurementId: "G-EENR0PN0H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }