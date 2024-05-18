import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderRight from './HeaderRight';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { signOut } from 'firebase/auth';
import { Auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout } from './features/UserSlice';
import { useSelector } from 'react-redux';
function Header() {
  const dispatch= useDispatch();
  const logmeout=()=>{
    dispatch(logout(
      {
        create:false,
        good:false,
        loger:true
      }
    ))
    signOut(Auth)
  }
  const details=useSelector((state)=>state.user.user)
  return (
    <div className='Header'>
        <div className='left'>
            <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' className='linkimg' alt=''/>
         <div className='search'>  
            <SearchIcon/>
            <input placeholder='Search'/>
        </div> 
        </div>
        <div className='right'>
            <HeaderRight  Icon={HomeIcon} title="Home"/>
            <HeaderRight  Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderRight  Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderRight  Icon={ChatIcon} title="Messaging"/>
            <HeaderRight  Icon={NotificationsIcon} title="Notifications"/>
            <HeaderRight  avatar={true} title="LogOut" whenclick={logmeout}/>
        </div>
    </div>
  )
}
export default Header