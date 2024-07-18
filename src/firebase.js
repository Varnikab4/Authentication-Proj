import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD7-o9yrnXWPKPp5ApYUtOlK_IQDtsrtkA",
  authDomain: "authentication-proj-12july.firebaseapp.com",
  databaseURL: "https://authentication-proj-12july-default-rtdb.firebaseio.com",
  projectId: "authentication-proj-12july",
  storageBucket: "authentication-proj-12july.appspot.com",
  messagingSenderId: "935124441900",
  appId: "1:935124441900:web:10bd49d832d700afb36a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;