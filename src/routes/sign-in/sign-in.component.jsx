import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {
    // useEffect(() => {
    //     const redirectResponse = async () =>{
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //     }
    //     redirectResponse();
    // }, [] );

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
        // console.log(user);
    }
    // const logGoogleRedirectUser = async () =>{
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}
export default SignIn;