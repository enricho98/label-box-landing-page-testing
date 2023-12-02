// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ,
  appId: import.meta.env.VITE_APP_ID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, db, storage };
