import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

// import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';


const Authentication = () => {
    // useEffect(() => {
    //     const redirectResponse = async () =>{
    //         const response = await getRedirectResult(auth);
    //         console.log(response)
    //     }
    //     redirectResponse();
    // }, [] );

    // const logGoogleRedirectUser = async () =>{
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({user});
    // }

    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Authentication;