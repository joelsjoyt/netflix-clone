import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzzzC9hzAEsjuq3Cz4lTjT78Y7mThlVK4",
  authDomain: "netflix-clone-6c81b.firebaseapp.com",
  projectId: "netflix-clone-6c81b",
  storageBucket: "netflix-clone-6c81b.appspot.com",
  messagingSenderId: "592974215499",
  appId: "1:592974215499:web:34ada38734c120153010ce"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }