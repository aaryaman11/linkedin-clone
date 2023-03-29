import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://img.icons8.com/fluency/48/null/linkedin.png" 
            alt=""/>
 
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationIcon} title="Notifications" />
            <HeaderOption avatar={true} /*"https://i.ibb.co/2Zbpc7r/tom1.png"*/ title="Me" onClick={logoutOfApp} />


        </div>

      
    </div>
  );
}

export default Header;
