import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD7lt8hv5hypMODTkmoUSsZfGP7mh-4VFc",
    authDomain: "linkedin-clone-6114d.firebaseapp.com",
    projectId: "linkedin-clone-6114d",
    storageBucket: "linkedin-clone-6114d.appspot.com",
    messagingSenderId: "894986197848",
    appId: "1:894986197848:web:244cf698cd43da43a1232d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth}