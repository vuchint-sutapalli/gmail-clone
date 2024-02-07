import React from 'react'
import "./Mail.css"
import { IconButton } from '@mui/material'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { selectedMail } from './features/sendMail/mailSlice'
import { useSelector } from 'react-redux'
function Mail() {
  const navigate = useNavigate()


  const data  = useSelector(selectedMail)

  console.log("dsf os", data)
  
  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">

          <IconButton onClick={()=>{navigate('/')}}>
              <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox/>
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>

        </div>
        <div className="mail__tooolsRight">
          <IconButton>
            <UnfoldMore/>
          </IconButton>
          <IconButton>
            <Print/>
          </IconButton>
          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{data?.subject}</h2>
          <LabelImportant className='mail__important'/>
          <p>{data?.title}</p>
          <p className='mail__time'>{data?.time}</p>
        </div>
        <div className="mail__bodyMessage">
            <p>
              {data?.description}
            </p>
        </div>
       
      </div>
    </div>
  )
}

export default Mail