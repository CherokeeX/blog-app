import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUF3nnsFMV73_hN-j3W9ZC72XGDnef5gc",
    authDomain: "react-blog-app-48e69.firebaseapp.com",
    projectId: "react-blog-app-48e69",
    storageBucket: "react-blog-app-48e69.appspot.com",
    messagingSenderId: "320289826160",
    appId: "1:320289826160:web:00f4f89a9a8a230a9d9bb5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  database.ref().set({title : "blog title 1"}); 