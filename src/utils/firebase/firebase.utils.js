import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu_SxmletidziMwFHKyqKEyzpYxnACZuQ",
  authDomain: "nash-clothing-db.firebaseapp.com",
  projectId: "nash-clothing-db",
  storageBucket: "nash-clothing-db.appspot.com",
  messagingSenderId: "488795919288",
  appId: "1:488795919288:web:ba45ff0e12c91c2c11b54d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
