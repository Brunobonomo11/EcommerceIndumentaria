import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBV5xGQtqUZjgyVD_mw_J07cn6sY9H4Ua8",
  authDomain: "ecommerce-indumentaria.firebaseapp.com",
  projectId: "ecommerce-indumentaria",
  storageBucket: "ecommerce-indumentaria.appspot.com",
  messagingSenderId: "756807350887",
  appId: "1:756807350887:web:7c3e8656af4a39038d32c2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)