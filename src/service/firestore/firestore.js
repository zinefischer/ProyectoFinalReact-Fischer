import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB1iHXBDZRZ871-ZAIPbgjcZscwjMVGqIM",
    authDomain: "reve-coder-project.firebaseapp.com",
    projectId: "reve-coder-project",
    storageBucket: "reve-coder-project.appspot.com",
    messagingSenderId: "383449416757",
    appId: "1:383449416757:web:d8d2e5bbe2261e49919d7c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)