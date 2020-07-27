import firebase from "firebase";

const email = "rodion.hryhorenko@gmail.com";
const password = "z[)={#hD&9KaC&-P";

firebase.initializeApp({
  apiKey: "AIzaSyBPGa2QRSfvGMLVSgvPeCYRX_fJL7zdex8",
  authDomain: "joobleinterviewfrontend.firebaseapp.com",
  databaseURL: "https://joobleinterviewfrontend.firebaseio.com",
  projectId: "joobleinterviewfrontend",
  storageBucket: "joobleinterviewfrontend.appspot.com",
  messagingSenderId: "84956270178",
  appId: "1:84956270178:web:65528f215c98826a",
});
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch((error) => {
    console.log(error.code, error.message);
  });

const db = firebase.firestore();



export default db;
