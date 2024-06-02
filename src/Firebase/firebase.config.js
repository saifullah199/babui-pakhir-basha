// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDmnGClHx1iUby6YwEL7m9J02trCBQLEQ",
  authDomain: "babui-pakhir-basha.firebaseapp.com",
  projectId: "babui-pakhir-basha",
  storageBucket: "babui-pakhir-basha.appspot.com",
  messagingSenderId: "361386634605",
  appId: "1:361386634605:web:df3f38f86e3d2e82e2fe64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
