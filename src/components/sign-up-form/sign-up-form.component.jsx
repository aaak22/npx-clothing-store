import React, { useState } from 'react';

import { createUserWithEmailAndPasswordAuth, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPasswordAuth(email, password);
            console.log(user);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields(); 

        }catch(err) {
            if(err.code === 'auth/email-already-in-use'){
                alert('email already in use')
            }else{
                console.log('user creation error', err);
            }
        }
    }

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value })
    }
    
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit()}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName}/>

                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;