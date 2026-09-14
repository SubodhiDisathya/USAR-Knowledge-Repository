import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxlUAinEuti_iY30TfwQscyRitzHJcVxU",
  authDomain: "knowledge-repository-7d4e2.firebaseapp.com",
  databaseURL: "https://knowledge-repository-7d4e2-default-rtdb.firebaseio.com",
  projectId: "knowledge-repository-7d4e2",
  storageBucket: "knowledge-repository-7d4e2.firebasestorage.app",
  messagingSenderId: "929191184579",
  appId: "1:929191184579:web:ccc55a1713a835ba2a3a76",
  measurementId: "G-VX3151J07D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export { serverTimestamp };
