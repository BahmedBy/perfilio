
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
const firebaseConfig={
    apiKey: "AIzaSyBG-56o_vXUN2UNsQ-myqYhsnIybhTs64Y",
    authDomain: "profilio-4668b.firebaseapp.com",
    projectId: "profilio-4668b",
    storageBucket: "profilio-4668b.appspot.com",
    messagingSenderId: "678512185818",
    appId: "1:678512185818:web:2ad5337f6aa3a8b14730e3",
    measurementId:"G-5ZBG9BMWVD"
}
 const app=initializeApp(firebaseConfig)
export const db=getFirestore(app)
