import { initializeApp } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDoEW1eRFN14JHT5kGLp34WIS5BjxI5wkM",
  authDomain: "chat-4aff0.firebaseapp.com",
  projectId: "chat-4aff0",
  storageBucket: "chat-4aff0.appspot.com",
  messagingSenderId: "370756633718",
  appId: "1:370756633718:web:c4c11d52322d049e468b57",
  measurementId: "G-6ZHNT8W1XP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()