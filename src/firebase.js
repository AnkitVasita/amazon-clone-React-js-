import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWDmASaQvFAMI3mXrss2v3ef1RDYJRtKM",
  authDomain: "clone-308f2.firebaseapp.com",
  databaseURL: "https://clone-308f2.firebaseio.com",
  projectId: "clone-308f2",
  storageBucket: "clone-308f2.appspot.com",
  messagingSenderId: "977742086040",
  appId: "1:977742086040:web:5dd68760a4a7b6536e35ed",
  measurementId: "G-55K6N3V4KT",
});


const auth = firebase.auth();

export { auth };
