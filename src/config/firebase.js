// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MgYMqrU9n9I-VKkTxRCFOewOb50pB7w",
  authDomain: "love-calculator-ed983.firebaseapp.com",
  projectId: "love-calculator-ed983",
  storageBucket: "love-calculator-ed983.appspot.com",
  messagingSenderId: "1089875583263",
  appId: "1:1089875583263:web:4726e5a7f600d0eeda902a",
  measurementId: "G-6REJNFQP79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore()
export const docs = collection(db, "victims")



// addData("Sakib", "27/10/2006", "Amadeus", "15/07/2006")
console.log(docs)


