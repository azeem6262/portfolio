// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXP3L6fxuPrYw_4k02F9dsLOT6JCmB6Dg",
  authDomain: "portfolio-next-e6e96.firebaseapp.com",
  projectId: "portfolio-next-e6e96",
  storageBucket: "portfolio-next-e6e96.firebasestorage.app",
  messagingSenderId: "155133702653",
  appId: "1:155133702653:web:a93f85bd96f117dd076994",
  measurementId: "G-JDS21NKVDB"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };