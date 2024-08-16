import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADv4VrjQYml3goya9UJL_1Anpie0cN7TY",
  authDomain: "authestic-7b21a.firebaseapp.com",
  projectId: "authestic-7b21a",
  storageBucket: "authestic-7b21a.appspot.com",
  messagingSenderId: "577814646399",
  appId: "1:577814646399:web:43b06853c996ea92c6f94a",
  measurementId: "G-9ENF2Z65FD"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app);


export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
}
