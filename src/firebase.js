// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5aQ4-A_ozipIsUCJhKFu4wylux7ljrkg", 
  authDomain: "chacha-chat-80e44.firebaseapp.com",
  projectId: "chacha-chat-80e44",
  storageBucket: "chacha-chat-80e44.appspot.com",
  messagingSenderId: "829027310406",
  appId: "1:829027310406:web:6ad2118c325e285c0d2347"
};

// const cookies = new Cookies();
// cookies.set(key1, value1, {secure: true, sameSite: 'none'});
// cookies.set(key2, value2, {secure: true, sameSite: 'none'});
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=none;secure";