import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/sendMail/mailSlice';
import { loggedInUser, login } from './features/user/userSlice';
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import Sidebar from './Sidebar';

function App() {

  const auth = getAuth();


  const SendMessageIsOpen  = useSelector(selectSendMessageIsOpen)
  const user = useSelector(loggedInUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    onAuthStateChanged(auth, 
      (user) => {
        if (user) {
          dispatch(login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
          }))
        } else {
          // User is signed out
          // ...
        }}
      );
  
    return () => {
    }
  }, [])
  

// Initialize Firebase


  
  return (
    <BrowserRouter>
      {
        !user? (
          <Login />
        ): (
          <div className="app">
              <Header></Header>
              {/* <Counter/> */}
      
                <div className="app__body">
                  <Sidebar/>
      
                  <Routes>
                    <Route path="/email" element={<Mail />} />
                    <Route path="/" element={<EmailList />} />
                  </Routes>
      
                </div>
                {
                  SendMessageIsOpen && <SendMail/>
                }
            </div>
        )
      }
      
    </BrowserRouter>
    
  );
}

export default App;
