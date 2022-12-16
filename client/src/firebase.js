import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSaq729Fcax2sCKaieiL1o5wE9qYy6mIs",
  authDomain: "fooddeliveryapp154.firebaseapp.com",
  projectId: "fooddeliveryapp154",
  storageBucket: "fooddeliveryapp154.appspot.com",
  messagingSenderId: "463417095744",
  appId: "1:463417095744:web:38a377531cb6574aef51a5",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app, "gs://fooddeliveryapp154.appspot.com");
export default storage;
