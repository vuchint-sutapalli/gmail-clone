import React from 'react'
import "./EmailRow.css"
import { CheckBox, LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/sendMail/mailSlice'
function EmailRow({ title, subject, description, time}) {

    const navigate = useNavigate();
    const dispatch =  useDispatch()

    const openMail = () => {
        dispatch(selectMail({title, subject, description, time}))
        navigate('/email')
    }
  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow__options">
            <CheckBox/>
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>

        </div>
        <h3 className="emaiRow__title">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>
                {subject}{" "}
                <span className="emailRow__description">{"- "}
                    {description}
                </span>
            </h4>
            
        </div>

        <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow