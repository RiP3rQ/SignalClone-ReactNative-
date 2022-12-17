import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC84P5UX-X7qfKaoJktHNNiOJuwVwjxfLo",
  authDomain: "signal-clone-yt-56181.firebaseapp.com",
  projectId: "signal-clone-yt-56181",
  storageBucket: "signal-clone-yt-56181.appspot.com",
  messagingSenderId: "480826236606",
  appId: "1:480826236606:web:7eac2893999ca2b4da88ef",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
