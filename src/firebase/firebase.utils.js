import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJM8rSygn8FjqpQLUBoYHyimSRGbK2uJc",
  authDomain: "procesos-tecton-db.firebaseapp.com",
  databaseURL: "https://procesos-tecton-db.firebaseio.com",
  projectId: "procesos-tecton-db",
  storageBucket: "procesos-tecton-db.appspot.com",
  messagingSenderId: "261996294659",
  appId: "1:261996294659:web:982cea99e8d91689a29436",
  measurementId: "G-0L2VR727PX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }

  }

  return userRef
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
