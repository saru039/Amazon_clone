import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlmBfdmbQ0LHClqoJJ1DrQu7ddjE4kqrI",
  authDomain: "amaz-clone-ea52e.firebaseapp.com",
  projectId: "amaz-clone-ea52e",
  storageBucket: "amaz-clone-ea52e.firebasestorage.app",
  messagingSenderId: "110207050506",
  appId: "1:110207050506:web:ddbc65764c63497d9890f3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export { auth };
