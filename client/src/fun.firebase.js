// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSaq729Fcax2sCKaieiL1o5wE9qYy6mIs",
  authDomain: "fooddeliveryapp154.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp154-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp154",
  storageBucket: "fooddeliveryapp154.appspot.com",
  messagingSenderId: "463417095744",
  appId: "1:463417095744:web:38a377531cb6574aef51a5",
  measurementId: "G-BBJ4M9MBH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Lấy reference của file cần xoá
const storageRef = app
  .storage()
  .ref(
    "gs://fooddeliveryapp154.appspot.com/docs/641b0cda5007badd0213a151vanthinh/1679567326517B1906745_DangHoTruongPhuc_BTTongHop_CT179-03.pdf"
  );

export const DeleteFileDoc = () => {
  try {
    // Xoá file
    storageRef
      .delete()
      .then(() => {
        console.log("Xoá file thành công");
      })
      .catch((err) => {
        console.error("Xoá file thất bại: ", err);
      });
  } catch (error) {}
};
