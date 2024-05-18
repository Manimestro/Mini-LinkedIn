
// ----->Firestore firebase
// getFirestore,collection,onSnapshot,addDoc,deleteDoc,
// doc,query,where,orderBy,serverTimestamp,getDoc,updateDoc


//----->auth firebase
// getAuth,createUserWithEmailAndPassword,signOut,
// signInWithEmailAndPassword , onAuthStateChanged



import { initializeApp } from "firebase/app";
import { getFirestore ,collection ,getDocs,query,orderBy,where ,getDoc ,doc, onSnapshot, addDoc, deleteDoc, serverTimestamp, updateDoc, Firestore} from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkPFn0Om45QWua2agM5jWVp1pIrIHzr-4",
  authDomain: "linkedin-22b5e.firebaseapp.com",
  projectId: "linkedin-22b5e",
  storageBucket: "linkedin-22b5e.appspot.com",
  messagingSenderId: "521558694397",
  appId: "1:521558694397:web:ca9f8c9b98e17df92c2194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth
const Auth=getAuth(app);
//set up data
const db=getFirestore(app);
//exact location
const refre=collection(db,"posts")
// const Auth=getAuth(app);

export {refre };
//getdocs
// const getrefre=doc(db,"posts","H9SnHt0ybfzQ9XhKpTzL")
// getDoc(getrefre).then((dod)=>{
//   console.log(dod.data())
// })
export  {Auth} ;
