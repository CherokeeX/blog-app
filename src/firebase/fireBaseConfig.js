
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

   /*database.ref().set({
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
    
    database.ref('TAGS').set(['anguler','flutters','react'])
   })
   .then(()=>{
    
   })
.catch((e)=>{
  console.log('hata alindi', e);
})

/*database.ref('Auther/BABA').once('value').then((snapshot)=>{
  const blog = snapshot.val();
  console.log(blog);
})*/
/*
database.ref().on('value' , (snapshot)=>{
  const blog = snapshot.val();
  console.log(blog)
})

setTimeout(()=>{database.ref('title').set('updeted new title1')}, 4000);
setTimeout(()=>{database.ref().off()}, 6000);
setTimeout(()=>{database.ref('title').set('updeted new title3')}, 10000)
*/


// const blog = {
//   x : {
//     id: "1",
//     Title: 'deneme title'
//    },
//    y : {
//     id: "2",
//     Title: 'deneme title 2'
//    },
// }
  
// const users = {
//   'Seref Badi ' : {
//     name: 'Seref',
//     sirname : 'Badi'
//   },
//   'Onur Badi ' : {
//     name: 'Onur',
//     sirname : 'Badi'
//   }

// }

// database.ref().set({
//   blog: blog,
//   users: users

// })

// database.ref('blog/x').on('value',(snapshot)=> {
//   console.log(snapshot.val())
// })

// database.ref('blog').push({
//   title : "blog title 33",
//   id : "3"
// })

// database.ref('products').push({
//   name: "iphone 13",
//   price: "40000",
//   isAprood : true
// });
// database.ref('products').push({
//   name: "iphone 14",
//   price: "50000",
//   isAprood : true
// });
// database.ref('products').push({
//   name: "iphone 14 pro max",
//   price: "75000",
//   isAprood : true
// });

// database.ref("products").once('value').then((snapshot)=>{

//   const products = [];
//   snapshot.forEach((product)=>{
//     products.push({
//       id: product.key,
//       ...product.val( )
//     })
//   })
//   console.log(products)
// });

database.ref('products').on('value',(snapshot)=>{
  
  const products = [];
  snapshot.forEach((product)=>{
    products.push({
      id: product.key,
      ...product.val( )
    })
  })
  console.log(products);


})
  