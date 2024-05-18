import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login,logout } from './features/UserSlice';
import Widgets from './Widgets';
import Register from './Register';
function App() {
  const dispatcher=useDispatch();
  const user=useSelector((state)=>(state.user.user))
  useEffect(()=>{
    onAuthStateChanged(Auth,(cred)=>{
      console.log(cred)
      cred ? dispatcher(login(
        {
          email:cred.email,
          displayName:cred.displayName,
          uid:cred.uid,
          profilepic:cred.photoURL,
          good:true,
          create:false,

       }
      )): dispatcher(logout({
        good:false,
        loger:true
    }))
    })
  }
  ,[dispatcher])
  return (
    <div className="App">
     {user.loger ? (<Login />) :console.log("not loged")}
      {user.create ? (<Register/>) :console.log(user.create)}
      { user.good ? (
                    <div>
                    <Header />
                      <div className='linkdinbody'>
                      <Sidebar/>
                      <Feed/>
                      <Widgets/>
                      <div></div>
                      </div>
                      </div>
      ):console.log("not")
        
      }

</div> 
  );
}
export default App;
