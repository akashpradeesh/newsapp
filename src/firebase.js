// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_R4IiClZHRN39zmHNw3a6ZvdOlfTpgXE",
  authDomain: "news-app-703ce.firebaseapp.com",
  projectId: "news-app-703ce",
  storageBucket: "news-app-703ce.appspot.com",
  messagingSenderId: "149185820369",
  appId: "1:149185820369:web:6c5a528b4a6bfa9749b7f0"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
