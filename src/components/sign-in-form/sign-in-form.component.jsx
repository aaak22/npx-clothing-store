import React, { useState, useContext } from 'react';

import { 
    createUserWithEmailAndPasswordAuth, 
    createUserDocFromAuth, 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils'

// import { UserContext } from '../../contexts/user.context';


import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-in-form.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // const { user } = await signInWithGooglePopup();
        // const userDocRef = await createUserDocFromAuth(user);
        // console.log(userDocRef);
        // console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(user);
            resetFormFields();
            
        } catch (err) {
            switch(err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('user doesnot exist');
                    break;
                default: 
                    alert(err);
            }
            console.log('error msg: ', err)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
