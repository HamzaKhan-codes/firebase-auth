
import { upload } from "@testing-library/user-event/dist/upload";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";


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
const db = getFirestore(app);
const storage = getStorage(app);

 async function register (userInfo){
  const {email, password, fullname, age} = userInfo
    await createUserWithEmailAndPassword(auth, email, password)
    return addDoc(collection(db, "users"), {email, fullname, age })
}

function login (email, password){
    return signInWithEmailAndPassword(auth, email, password)
  
}

async function addProduct(product){
  const { title, description, price, image } = product

  const storageRef = ref(storage, 'products/' +image.name)

  await uploadBytes(storageRef, image)

  const url = await getDownloadURL(storageRef) 

  return addDoc(collection(db, "products"), {title, description, price, image: url })
}

export{
    register, 
    login,
    onAuthStateChanged,
    auth,
    addProduct
}


