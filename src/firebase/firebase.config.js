
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNU92_2dVNVwnedT5t5hsdi81lvTBXy4g",
  authDomain: "smart-medicare-acfce.firebaseapp.com",
  projectId: "smart-medicare-acfce",
  storageBucket: "smart-medicare-acfce.appspot.com",
  messagingSenderId: "342166243222",
  appId: "1:342166243222:web:243d8275df897ef7527fb7",
  measurementId: "G-B0S48H93TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;