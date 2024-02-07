import React from 'react'

import "./Login.css"
import { Button } from '@mui/material'
import { provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/user/userSlice'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const dispatch = useDispatch()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signIn = () => {
        signInWithPopup(auth, provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))

        }).catch((err)=>{alert(err.message)})
    }
  return (
    <div className='login'>
        <div className="login__container">

            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_sq.jpg" alt="" />
            <Button variant='contained' color='primary' onClick={signIn} >Login</Button>
        </div>
    </div>
  )
}

export default Login