import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBM3aORnOmHC4Zn5g-G6bipzbt5NjRUYsI",
    authDomain: "proyecto-final-coder-36a25.firebaseapp.com",
    projectId: "proyecto-final-coder-36a25",
    storageBucket: "proyecto-final-coder-36a25.firebasestorage.app",
    messagingSenderId: "1019893386023",
    appId: "1:1019893386023:web:f1f687748e54f13144f702"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)