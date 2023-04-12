import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "chatgpt-clone-c9727.firebaseapp.com",
  projectId: "chatgpt-clone-c9727",
  storageBucket: "chatgpt-clone-c9727.appspot.com",
  messagingSenderId: "1058779007153",
  appId: "1:1058779007153:web:5073a07100e6c090603a90",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
