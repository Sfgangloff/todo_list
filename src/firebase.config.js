import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBcqcfwG3kn8gAarLVhr1HmSzdt2d-GUwU",
    authDomain: "todolist-bfbd8.firebaseapp.com",
    projectId: "todolist-bfbd8",
    storageBucket: "todolist-bfbd8.appspot.com",
    messagingSenderId: "308178553357",
    appId: "1:308178553357:web:c9bfe87553d945f2716344",
    measurementId: "G-FJ9WDZC88V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db }