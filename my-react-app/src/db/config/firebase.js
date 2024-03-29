// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDsIWDEQS_NQOcSAp7HYmrRF3MZ_rFZ-Hs",
  authDomain: "progress-app-8fd09.firebaseapp.com",
  projectId: "progress-app-8fd09",
  storageBucket: "progress-app-8fd09.appspot.com",
  messagingSenderId: "947693368721",
  appId: "1:947693368721:web:39c4fd05e9369c64359630",
  measurementId: "G-PT54FSS9EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Export firestore database
export const db = getFirestore(app);
export default app;
