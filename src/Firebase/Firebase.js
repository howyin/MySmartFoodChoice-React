// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

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


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const analytics = getAnalytics(app);