// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1JkfPTufkBKH6_4dfuKvSmTBMDZDxjI0",
  authDomain: "multimart-ecommerce-8b9cd.firebaseapp.com",
  projectId: "multimart-ecommerce-8b9cd",
  storageBucket: "multimart-ecommerce-8b9cd.appspot.com",
  messagingSenderId: "378873913503",
  appId: "1:378873913503:web:574aba4b7b19ef60f982aa",
  measurementId: "G-RYTTMCPTM9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export default app;