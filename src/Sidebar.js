import React from 'react'

import "./Sidebar.css"
import { Button, IconButton } from '@mui/material'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/sendMail/mailSlice'
function Sidebar() {
    const dispatch = useDispatch()
  return (
    <div className='sidebar'>
        <Button
            className='compose' 
            startIcon={<Add fontSize='large'/>}
            onClick={()=>{dispatch(openSendMessage())}}
        >
            Compose
        </Button>
        <SidebarOption Icon={Inbox} title="Inbox" number={5} selected={true}></SidebarOption>
        <SidebarOption Icon={Star} title="Starred" number={5}></SidebarOption>
        <SidebarOption Icon={AccessTime} title="Snoozed" number={5}></SidebarOption>
        <SidebarOption Icon={LabelImportant} title="Important" number={5}></SidebarOption>


        <SidebarOption Icon={NearMe} title="Sent" number={5}></SidebarOption>
        <SidebarOption Icon={Note} title="Drafts" number={5}></SidebarOption>
        <SidebarOption Icon={ExpandMore} title="More" number={5}></SidebarOption>



        <div className="sidebar__footer">

            <div className="sidebar__footerIcons">
                <IconButton>
                    <Person />
                </IconButton>
                <IconButton>
                    <Duo/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>

            </div>

        </div>

    </div>
  )
}

export default Sidebar