import { Avatar } from '@mui/material'
import React ,{forwardRef} from 'react'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';

const Post=forwardRef(({name,discrip,message,images,firstLetter},ref)=> {
    const user=useSelector((state)=>(state.user.user))
    const IconGenerate=(Icon,text,color)=>(
        <div className="IconGenerate">
        <Icon style={{color:color}}/>
        <h4>{text}</h4>
        </div>
    )
  return (
    <div ref={ref} className='Post'>
        <div className='PostHead'>
            <Avatar src={images}>{firstLetter} </Avatar>
            <div className='Postinfo'>
                <h2>{name}</h2>
                <p>{discrip}</p>
            </div>
        </div>
        <div className='PostBody'>
            <p>{message}</p>
        </div>
        <div className='LikeShare'>
        {IconGenerate(ThumbUpIcon,"Like","gray")}
        {IconGenerate(ChatIcon,"Comment","gray")}
        {IconGenerate(ShareIcon,"Share","gray")}
        {IconGenerate(SendIcon,"Send","gray")}
        </div>
    </div>
  )
})

export default Post