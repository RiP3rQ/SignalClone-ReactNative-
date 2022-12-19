import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC84P5UX-X7qfKaoJktHNNiOJuwVwjxfLo",
  authDomain: "signal-clone-yt-56181.firebaseapp.com",
  projectId: "signal-clone-yt-56181",
  storageBucket: "signal-clone-yt-56181.appspot.com",
  messagingSenderId: "480826236606",
  appId: "1:480826236606:web:7eac2893999ca2b4da88ef",
};
let app;
getApps().length === 0
  ? (app = initializeApp(firebaseConfig))
  : (app = getApp());

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
