import firebase from "firebase/app"

import "firebase/firestore"

import "firebase/auth"

const firebaseConfig = {

    apiKey: "Xx",
  
    authDomain: "authx",
  
    projectId: "authxc",
  
    storageBucket: "authx",
  
    messagingSenderId: "xxx",
  
    appId: "1:xxxx"
  
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore=firebase.firestore();

  const projectAuth =firebase.auth();



  export { projectFirestore , projectAuth };