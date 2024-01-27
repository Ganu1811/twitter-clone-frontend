import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'
import { Outlet } from 'react-router-dom'

function Home() {

  const user = useAuthState(auth);

  const handleLogout = () =>{
    signOut(auth)
  }

  return (
    <div className='app'>
        <Sidebar handleLogout={handleLogout} user={user}/>
        <Outlet/>
        <Widgets />
    </div>
  )
}

export default Home