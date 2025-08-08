import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNr_JAeHHmbc8Kh0dXwRbfaTMIC8z4HMk",
    authDomain: "ecommerce-pequechic.firebaseapp.com",
    projectId: "ecommerce-pequechic",
    storageBucket: "ecommerce-pequechic.firebasestorage.app",
    messagingSenderId: "224487059096",
    appId: "1:224487059096:web:389d0393994caa95e2eaed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;