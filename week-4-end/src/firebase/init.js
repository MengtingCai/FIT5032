// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQd3yQtCgebdBRoa69UaHlomZ0vZ5v5yY",
  authDomain: "week7-mengting.firebaseapp.com",
  projectId: "week7-mengting",
  storageBucket: "week7-mengting.appspot.com",
  messagingSenderId: "1007601834702",
  appId: "1:1007601834702:web:902befd0208b295723ce9f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db