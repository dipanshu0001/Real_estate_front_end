// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs5rOAI8jWRv14VGMZ1skk0T0emqQ2-l0",
  authDomain: "interiordesign-83a5e.firebaseapp.com",
  projectId: "interiordesign-83a5e",
  storageBucket: "interiordesign-83a5e.appspot.com",
  messagingSenderId: "999280883152",
  appId: "1:999280883152:web:12e4eddbd68d36371bb5d5",
  measurementId: "G-LHX5ZYKLQX"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig );
export const analytics = getAnalytics(app);