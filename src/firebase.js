import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAH8CWuKpIqHFhlzDddYjN0ke7k2jrHjcY",
    authDomain: "netflix-clone-98b33.firebaseapp.com",
    projectId: "netflix-clone-98b33",
    storageBucket: "netflix-clone-98b33.appspot.com",
    messagingSenderId: "593597764543",
    appId: "1:593597764543:web:cbca410f0cd744f020070a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export { auth };
  export default db; 