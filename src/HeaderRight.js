import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderRight.css'
import { useSelector } from 'react-redux'
function HeaderRight({avatar,Icon,title,whenclick}) {
  const details=useSelector((state)=>state.user.user)
  return (
    <div onClick={whenclick} className='HeaderRight'> 
    {Icon && <Icon className="sub_icons" />}
    {avatar && <Avatar src={details?.profilepic} className="my-img" >{details?.email[0]}</Avatar>}
    <h3 className='title'>{title}</h3>
    </div>
  )
}

export default HeaderRight