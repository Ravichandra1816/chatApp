import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBhPxeT8Ti3w9xrbiN7VCsp0e6V9hir5Dc",
  authDomain: "chat-application-f4223.firebaseapp.com",
  projectId: "chat-application-f4223",
  storageBucket: "chat-application-f4223.firebasestorage.app",
  messagingSenderId: "601619216807",
  appId: "1:601619216807:web:848fbabf91ccbe19dade82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      password: "",
      avatar: "",
      bio: "Hey, I am using chat App",
      lastseen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.log("Error", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async()=>{
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error:", error)
    
  }
}


export { Signup, login, logout , auth, db };
