import React from 'react'
import './Header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  
  const dispatch= useDispatch();

  const logoutOfApp=()=>{
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

            <div className="header__search">
                <SearchSharpIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption 
            avatar={true}  
            onClick={logoutOfApp}
            title="me" />
        </div>
    </div>
  )
}

export default Header