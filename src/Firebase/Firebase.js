// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB-ivqhXPZw7ZpT9Ojl08E9TW2bQVAr_rQ",

  authDomain: "myfoodchoice-dc7bd.firebaseapp.com",

  databaseURL: "https://myfoodchoice-dc7bd-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "myfoodchoice-dc7bd",

  storageBucket: "myfoodchoice-dc7bd.appspot.com",

  messagingSenderId: "316923369990",

  appId: "1:316923369990:web:93a713295c21bc39da4187",

  measurementId: "G-0ZD96GDHTL"

};



// Initialize Firebase, must everything after app const.

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);