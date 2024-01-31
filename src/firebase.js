import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwmgr68zpQ4rmCWwPI6sBz3dKBu3wqbQ",
  authDomain: "login-react-firebase-6d665.firebaseapp.com",
  projectId: "login-react-firebase-6d665",
  storageBucket: "login-react-firebase-6d665.appspot.com",
  messagingSenderId: "888389308187",
  appId: "1:888389308187:web:d48eb28cab5d8df7ae8dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)