// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB99eRB_vjFxO6cGDSmu-VzodiHFoipIJk",
    authDomain: "myproduct-4bab9.firebaseapp.com",
    projectId: "myproduct-4bab9",
    storageBucket: "myproduct-4bab9.appspot.com",
    messagingSenderId: "157339948495",
    appId: "1:157339948495:web:69884c946f8da7396eaeba",
    measurementId: "G-HMKG8M3YTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authUser = getAuth(app);
