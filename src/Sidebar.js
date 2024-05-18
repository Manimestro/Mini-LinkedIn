import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
function Sidebar() {
    const details=useSelector(state=>state.user.user)
    const recentItems=(item)=>(
        <div className='recentItem'>
            <p className="item">#</p>
            <p >
                {item}
            </p>
        </div>
    )
  return (
    <div className='Sidebar'>
        <div className='Sidebar_top'>
            <img src="https://images.unsplash.com/photo-1675719648634-ee7dfd9075f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
            <Avatar className='Avatar' src={details?.profilepic}>{details?.email[0]}</Avatar>
            {console.log(details,"fdfd")}
            <h3>{details.displayName}</h3>
            <h5>{details.email}</h5>
        </div>
        <div className="SidebarStatus">
            <div className='SidebarStatus1'>
            <p >Who viewd you</p>
            <p className='SidebarNum'>1236</p>
            </div>
            <div className='SidebarStatus1'>
            <p>Views on post</p>
            <p className='SidebarNum'>1038</p>
            </div>
        </div>
        <div className='SidebarBottom'>
            <p>Recent</p>
            {recentItems("reactJs")}
            {recentItems("Programing")}
            {recentItems("Softwareengeering")}
            {recentItems("design")}
            {recentItems("developer")}
        </div>
        </div>
  )
}
export default Sidebar