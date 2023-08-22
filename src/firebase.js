import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
    apiKey: "AIzaSyCCBq5jON13DjdHQKm29sQNQmCajo332SQ",
    authDomain: "disney-hotstar-c9526.firebaseapp.com",
    projectId: "disney-hotstar-c9526",
    storageBucket: "disney-hotstar-c9526.appspot.com",
    messagingSenderId: "666710426455",
    appId: "1:666710426455:web:bf3ec4ae90bc99fb5cb412",
    measurementId: "G-9KGBMNP5ES"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export {auth, provider, storage};
  export default db;

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;