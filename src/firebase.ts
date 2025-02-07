import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWdOcs-jCQU-uhVSu2qDlkMtGsEjD1atk",
  authDomain: "part-time-theater-73516.firebaseapp.com",
  projectId: "part-time-theater-73516",
  storageBucket: "part-time-theater-73516.firebasestorage.app",
  messagingSenderId: "817430213870",
  appId: "1:817430213870:web:21db89c33dbb9e38692fff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore();
