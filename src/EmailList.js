import React, { useEffect, useState } from 'react'
import "./EmailList.css"
import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from './firebase'
import {doc,query, onSnapshot, collection } from "firebase/firestore";

// import { Checkbox } from '@mui/material'
function EmailList() {
  const [emails, setEmails] = useState([])

  useEffect(() => {

    const q = query(collection(db, "emails"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
          list.push({
            ...doc.data(),
            id: doc.id
          });
      });
      console.log(list);
      setEmails(list)
    });
  
    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <div className='emailList'>
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <CheckBox />
            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <IconButton>
              <Redo />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
             
        </div>
        <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeft />
            </IconButton>
            <IconButton>
              <ChevronRight />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
          <Section Icon={Inbox} title="Primary" color="red" selected={true}></Section>
          <Section Icon={People} title="Social" color="#1A73E8" selected={false}></Section>
          <Section Icon={LocalOffer} title="Promotions" color="green" selected={false}></Section>
      </div> 
      <div className="emailList__list">
        {
          emails.map(({message, subject, timestamp, to, id})=>{
            return(
                <EmailRow key={id} title={to} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} subject={subject} />
            )
          })
        }
      </div>
    </div>
  )
}

export default EmailList