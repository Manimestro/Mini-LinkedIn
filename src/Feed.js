
import React,{useState,useEffect} from "react";
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";
import { refre} from "./firebase";
import { onSnapshot,addDoc, query ,orderBy,
    serverTimestamp 
} from "firebase/firestore";
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move'
const Feed=()=>{
    const details=useSelector((state)=>state.user.user)
    const refres=query(refre,orderBy("dateandtime","desc"))
    const[input,setinput]=useState("")
    const IconGenerate=(Icon,text,color)=>
        <div className="IconGenerate">
        <Icon style={{color:color}}/>
        <h4>{text}</h4>
        </div>
        
    
    const [posts,setposts]=useState([]);
    const PostAdder=()=>{
        console.log(input)
        addDoc(refre,{
            name:details.displayName,
            discrip:details.email,
            message:input,
            dateandtime:serverTimestamp(),
            images:details.profilepic,
            firstLetter:details.displayName[0]
        })
        setinput("")
    }
    useEffect(()=>{
        onSnapshot(refres,(snapshot)=>{
            console.log(snapshot.docs)
            setposts(snapshot.docs.map((snap)=>(
                {
                    id:snap.id ,
                    data:snap.data(),
                    
                }
        )))
        
        }
           )
    },)
    return(
    <div className="Feed">
        <div className="Postdiv">
            <div className="Startapost">
               <CreateIcon/>
                <form onSubmit={(Event)=>{
                    Event.preventDefault();
                    PostAdder()

                }}>
                <input type={"text"} value={input} onChange={(e)=>{
                        setinput(e.target.value)
                        console.log(posts)
                       

                }} placeholder={"Start a Post"}/>
                <button type="submit"> Send</button>
                </form>
            </div>
            <div className="IconsOptions">
            {IconGenerate(ImageIcon,"Photo","#7085F9")}
                {IconGenerate(SubscriptionsIcon,"Vedio","#E7A33E")}
                {IconGenerate(EventNoteIcon,"Event","#C0CBCD")}
                {IconGenerate(CalendarViewDayIcon,"Write article","#7EC15E")}
            </div>
        </div>
        <FlipMove>
            {
            posts.map(({id,data})=>{  
                            data={...data , id:id}        
                           return( <Post {...data} /> )
            }
            )}
            </FlipMove>
    </div>
    )
}
export default Feed