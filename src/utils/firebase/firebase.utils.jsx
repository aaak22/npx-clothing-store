import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBsZfzLm1W9UiUrqGfMlY2-SO2eJVelcoI",
    authDomain: "npx-clothing-db.firebaseapp.com",
    projectId: "npx-clothing-db",
    storageBucket: "npx-clothing-db.appspot.com",
    messagingSenderId: "15590543499",
    appId: "1:15590543499:web:ad5828c65eff37f1e4048e"
};


const firabaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.id);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(err){
            console.log('error creating',err.message)
        }
    }
}