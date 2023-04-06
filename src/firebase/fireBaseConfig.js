
import firebase, { initializeApp } from "firebase/app";
import { getDatabase,  set, } from "firebase";

/*import firebase from "firebase";

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
  */
  const firebaseConfig = {
    apiKey: "AIzaSyBhst8QF4newLYGXcVvlP3DfI--Q-r6gEU",
    authDomain: "blogs-f61b5.firebaseapp.com",
    databaseURL: "https://blogs-f61b5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blogs-f61b5",
    storageBucket: "blogs-f61b5.appspot.com",
    messagingSenderId: "796529302687",
    appId: "1:796529302687:web:e10136a86732f13a4b96aa"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const database = firebase.database();

   database.ref().set({
    title: 'BLOK TITLE DENEME',
    ADRES : 'CEMAL PASA MH ',
    Auther:  {
      isim : "seref",
      soyisim : 'Badi ',
      BABA : 'Mustafa'
    },
    OKUL : 'CUKUROVA'
    
   })

   .then(()=>{
    console.log('kayit  eklendi');
    database.ref('TAGS').set(['anguler','flutters','react'])
   })
   .then(()=>{
    console.log('tags has been repalced')
   })
.catch((e)=>{
  console.log('hata alindi', e);
})

console.log("uygulama  calisti");

database.ref('title').remove()
.then(()=>{
  console.log(' removed');
})

database.ref().update({
  title:'birthday'
})

database.ref().update({
  author:{
    name : 'onur',
    sirname: 'badi'
  }
})
database.ref().update({
  title:'new blog name',
  "author/name": "mira",
  imageUrl:"1.jpeg"

})
  
database.ref("author").update({
  name: 'Mikail'
})

