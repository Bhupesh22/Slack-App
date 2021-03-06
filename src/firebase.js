import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmzVgAsTK__v3vwaA43APJk42FH6UzilA",
  authDomain: "slack-clone-71691.firebaseapp.com",
  projectId: "slack-clone-71691",
  storageBucket: "slack-clone-71691.appspot.com",
  messagingSenderId: "964107559236",
  appId: "1:964107559236:web:6842ba12191ce58cd17711",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
