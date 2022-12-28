// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIjCpNO-fLTfsaGhZ9IQaHxLFwDNQC6Ic",
  authDomain: "moscato-vinoteca.firebaseapp.com",
  projectId: "moscato-vinoteca",
  storageBucket: "moscato-vinoteca.appspot.com",
  messagingSenderId: "29563775444",
  appId: "1:29563775444:web:b2f7cbbd8747e58098ce41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);