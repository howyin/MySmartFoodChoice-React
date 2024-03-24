// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAmbpmFE5kvadKbQOXJrxpe6gHbs94BoAc",

  authDomain: "mysmartfoodchoice-react.firebaseapp.com",

  projectId: "mysmartfoodchoice-react",

  storageBucket: "mysmartfoodchoice-react.appspot.com",

  messagingSenderId: "508842963693",

  appId: "1:508842963693:web:b2a56bc4eacff928b112e4",

  measurementId: "G-MN2R3ZB90F"

};


// Initialize Firebase, must everything after app const.

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);