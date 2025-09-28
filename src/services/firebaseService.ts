import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBt9azYwkpQSj7NYb78crdyZctvNkTgoTw",
  authDomain: "creativeprj-42272.firebaseapp.com",
  databaseURL: "https://creativeprj-42272-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "creativeprj-42272",
  storageBucket: "creativeprj-42272.firebasestorage.app",
  messagingSenderId: "873816167430",
  appId: "1:873816167430:web:5a8d7332d46620116adf87"
};

export const adminUid = "j0oFA3U7SPe8pTNHMzOOxHIzlzn1"

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

