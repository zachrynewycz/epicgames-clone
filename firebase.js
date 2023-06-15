import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnlg2NteZSg2HotLJ1kKhVB2qyqDRHSW8",
    authDomain: "epic-games-clone-f6139.firebaseapp.com",
    projectId: "epic-games-clone-f6139",
    storageBucket: "epic-games-clone-f6139.appspot.com",
    messagingSenderId: "869696876151",
    appId: "1:869696876151:web:ea89353062db1d297ee072",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
