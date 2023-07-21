import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALX7g5QjOauK4UDU3fvYDWPx0mftCISWU",
    authDomain: "dermocosmetica-react.firebaseapp.com",
    projectId: "dermocosmetica-react",
    storageBucket: "dermocosmetica-react.appspot.com",
    messagingSenderId: "683945049306",
    appId: "1:683945049306:web:62bb554ad6b6e453d2f9e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)