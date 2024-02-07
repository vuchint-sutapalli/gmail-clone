import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import { Avatar, IconButton } from '@mui/material';
import { Apps, Search } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUser, logout } from './features/user/userSlice';
import { getAuth, signOut } from "firebase/auth";

function Header() {
   const user =  useSelector(loggedInUser)
   const dispatch = useDispatch()
   const auth = getAuth();

   console.log('user issss', user);

   const handleOnClick = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(logout())
        }).catch((error) => {
            // An error happened.
        });
   }
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
        </div>
        <div className="header__middle">
            <Search />
            <input placeholder='search mail' type="text" />
            <ArrowDropDownIcon />
        </div>
        <div className="header__right">
            <IconButton>
            <Apps />
            </IconButton>
                
            <IconButton>
            <NotificationsIcon />
            </IconButton>
            <IconButton onClick={handleOnClick}>
                {/* <AccountCircleIcon /> */}
                <Avatar  src={user?.photoUrl}/>
            </IconButton>

            

        </div>
    </div>
  )
}

export default Header