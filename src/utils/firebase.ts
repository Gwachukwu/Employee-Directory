// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRlPC5eqVGa-0n-TvGYdGBfIpeoy3POmM",
    authDomain: "employee-directory-e73b7.firebaseapp.com",
    projectId: "employee-directory-e73b7",
    storageBucket: "employee-directory-e73b7.appspot.com",
    messagingSenderId: "545788545397",
    appId: "1:545788545397:web:8f8bb506a763f2e17a6b3c",
    measurementId: "G-465FW512VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }