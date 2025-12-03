import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyaNb2K79ZRWJ1QMuGhc3AcCi4L3d6zdQ",
  authDomain: "harrison-waldon-assignment-4.firebaseapp.com",
  projectId: "harrison-waldon-assignment-4",
  storageBucket: "harrison-waldon-assignment-4.firebasestorage.app",
  messagingSenderId: "564498396828",
  appId: "1:564498396828:web:30d3cc1cc81b2685b01f59",
  measurementId: "G-7BYZ1KT0TC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };