// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cc-crew-46942.firebaseapp.com",
  projectId: "cc-crew-46942",
  storageBucket: "cc-crew-46942.firebasestorage.app",
  messagingSenderId: "546711371184",
  appId: "1:546711371184:web:892a3ca3482ed2eee16a75",
  measurementId: "G-LT0K58X8GN"

  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


