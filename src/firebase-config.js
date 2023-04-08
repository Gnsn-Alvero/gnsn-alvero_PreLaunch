import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1MERJJnfmjsgqQqLoG_kyIxYhVMPt55U",
    authDomain: "authentication-60413.firebaseapp.com",
    projectId: "authentication-60413",
    storageBucket: "authentication-60413.appspot.com",
    messagingSenderId: "508362231939",
    appId: "1:508362231939:web:f860df690f509dfb3e8bb6",
    measurementId: "G-V2CLYMSL5P"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
