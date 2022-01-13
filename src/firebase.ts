import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS_QmWcTGcmAhlL5NPcGS-kRQ8GSlJBmM",
  authDomain: "part-time-theater.firebaseapp.com",
  projectId: "part-time-theater",
  storageBucket: "part-time-theater.appspot.com",
  messagingSenderId: "52098331465",
  appId: "1:52098331465:web:4d63c3378b5f68203f2098",
  measurementId: "G-XF42QC7WNH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore();
