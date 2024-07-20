
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe8_mEkT8qqW7uXI7Qaov5clnUJKTq3mE",
  authDomain: "myapp-c5f1b.firebaseapp.com",
  projectId: "myapp-c5f1b",
  storageBucket: "myapp-c5f1b.appspot.com",
  messagingSenderId: "551325005302",
  appId: "1:551325005302:web:e225d2f56a672a3b55c3d7",
  measurementId: "G-MKNPESBMTX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function register (email, password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Successfully Resgistered!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
}

function login (email, password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Successfully Signed In!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
}

export{
    register, 
    login
}


