import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCailRI-lyGsLohrKG78hnkeZFSR9QQtGM",
  authDomain: "clon-de-20f60.firebaseapp.com",
  projectId: "clon-de-20f60",
  storageBucket: "clon-de-20f60.appspot.com",
  messagingSenderId: "1054021770091",
  appId: "1:1054021770091:web:80c41415982ce607be4a2e",
  measurementId: "G-01CJP22DVB",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
