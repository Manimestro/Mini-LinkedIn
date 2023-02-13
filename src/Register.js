import React ,{useState} from 'react'
import './Login.css'
import {Auth} from './firebase'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login,logout } from './features/UserSlice'
import img from "./linked.png"
function Register() {
   const [name,setname]=useState("")
   const [picurl,setpic]=useState("")
   const [mail,setmail]=useState("")
   const [pass,setpass]=useState("")
   const Dispatch=useDispatch();
    const clickedSubmit=()=>{
        !name ? alert("Enter Name"):(
            createUserWithEmailAndPassword(Auth,mail,pass)
            .then(cred=>{
              updateProfile(cred.user,{
                displayName:name,
                photoURL:picurl
              }).then(()=>{
                console.log(name,picurl)
                console.log("hello",cred.user)
                  Dispatch(login(
                      {
                      email:cred.user.email,
                      displayName:name,
                      uid:cred.user.uid,
                      profilepic:picurl,   
                      good:true ,
                      create:false ,
                      loger:false     
                   })
              )}
            )
            }) .catch((err)=>{
              alert(err)
            }))}
  return (
    <div className='Login'>
      <div className='sublogin'>
        <img src={img} alt=''/>
        <form >
            <input placeholder='Full Name ' type={"text"} 
           value={name} onChange={(e)=>{
            setname(e.target.value)
           }} />
            <input placeholder='Profile pic Url (optional)' type={"text"} 
              value={picurl} onChange={(e)=>{
                setpic(e.target.value)
                }} />
            <input placeholder='Email' type={"email"}            
            value={mail} onChange={(e)=>{
            setmail(e.target.value)
           }}/>
            <input placeholder='Password' type={"password"} 
                       value={pass} onChange={(e)=>{
                        setpass(e.target.value)
                       }}/>
            <button type='submit' onClick={(event)=>{
                    event.preventDefault();
                    clickedSubmit()
        }}> Sign Up</button>
        </form>
    </div>
    </div>
  )
}
export default Register