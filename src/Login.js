import React ,{useState} from 'react'
import './Login.css'
import {Auth} from './firebase'

import { useDispatch } from 'react-redux'
import { login,logout } from './features/UserSlice'
import { signInWithEmailAndPassword } from 'firebase/auth';
import img from "./linked.png"

import { useSelector } from 'react-redux'
function Login() {
  const details=useSelector((state)=>state.user.user)
   const [mail,setmail]=useState("")
   const [pass,setpass]=useState("")
   const Dispatch=useDispatch();
    const signup=()=>{
      console.log(details)
      Dispatch(logout({
        good:false,
        create:true,
        loger:false
      }))
      console.log(details)
}
    const clickedSubmit=()=>{
      console.log(mail)
      signInWithEmailAndPassword(Auth,mail,pass)
      .then((cred)=>{
        Dispatch(login(
          {
            email:cred.user.email,
            displayName:cred.user.displayName,
            uid:cred.user.uid,
            profilepic:cred.user.photoURL,
            good:true, 
            create:false
          }
        ))
        
      }
      ).catch(er=>alert(er))
    }
  return (
    <div className='Login'>
      <div className='sublogin'>
        <img src={img} alt=''/>
        <form >
          
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
        }}> Sign in</button>
        </form>
        <p>Not a member <span className='register' onClick={signup}>Register</span></p>
    </div>
    </div>
  )
}
export default Login