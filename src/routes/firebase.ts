import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 
import { getFirestore } from "firebase/firestore"; 
// import { getAuth } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyC56sgqW1tC-9ngbvgphsoasEJjzFdjtpk",
  authDomain: "nwitter-reloaded-7a32f.firebaseapp.com",
  projectId: "nwitter-reloaded-7a32f",
  storageBucket: "nwitter-reloaded-7a32f.appspot.com",
  messagingSenderId: "17689494221",
  appId: "1:17689494221:web:e103bdc9fe0cecc60a1f84",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
