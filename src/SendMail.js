import React from 'react'
import "./SendMail.css"
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/sendMail/mailSlice'
import { db } from './firebase'

import { getFirestore, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


// import firebase from "firebase"

function SendMail() {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = async (formData) => {
        console.log(formData)



// Add a new document with a generated id.
const docRef = await  addDoc(collection(db, "emails"), {
    to:formData.to,
    subject: formData.subject,
    message: formData.message,
    timestamp: serverTimestamp()
});
console.log("Document written with ID: ", docRef.id);
       
        
        // setDoc(doc(db, "emails", 'myuser'), {
        //     to:formData.to,
        //     subject: formData.subject,
        //     message: formData.message,
        //     timestamp: serverTimestamp()
        // });
        // db.collection('emails').add()

        dispatch(closeSendMessage())

    }

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>
                New Message
            </h3>
            <Close onClick={()=>{dispatch(closeSendMessage())}} className='sendMail__close'/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
             <input placeholder="To" type="email"{...register("to", { required: true })} />
             {errors.to && <p className='sendMail__error'>To is  Required</p>}
             <input  placeholder='Subject' type="text" {...register("subject", { required: true })} />
             {errors.subject && <p className='sendMail__error'>Subject is  Required</p>}
             <input className='sendMail__message' placeholder='Message..' type="text" {...register("message", { required: true })}  />
             {errors.message && <p className='sendMail__error'>Message is  Required</p>}
             <div className="sendMail__options">
                <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
             </div>
        </form>
    </div>
  )
}

export default SendMail