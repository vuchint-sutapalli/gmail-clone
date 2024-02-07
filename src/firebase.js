// import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHjU3s9oYWruA86wWAa4eeGpENaxeWXl0",
    authDomain: "clone-1dfe4.firebaseapp.com",
    projectId: "clone-1dfe4",
    storageBucket: "clone-1dfe4.appspot.com",
    messagingSenderId: "306944847133",
    appId: "1:306944847133:web:5271297313e7d1ec2185f4"
  };

  const firebaseApp = initializeApp(firebaseConfig);

//   const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed

  const db = getFirestore(firebaseApp);

  const auth = getAuth();

  const provider =  new GoogleAuthProvider()


  export{ db, auth, provider}

