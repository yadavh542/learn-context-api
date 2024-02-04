import React, { useContext } from 'react'
import useUserContext from '../context/UserContext';
import Navbar from './Navbar';

function Profile() {

    const {user} = useUserContext();

  if(!user) return <div>Please Login</div>
  return (
    <>
    <Navbar/>
    <div>
        
        <h2>Profile 1</h2>
        <p>{user.username}</p>
    </div>
    </>
  )
}

export default Profile