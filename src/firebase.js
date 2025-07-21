import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: "flavourhunt-78fc6",
    storageBucket: "flavourhunt-78fc6.firebasestorage.app",
    messagingSenderId: "930422906552",
    appId: "1:930422906552:web:342b3347a9fca12dc6de4d"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
