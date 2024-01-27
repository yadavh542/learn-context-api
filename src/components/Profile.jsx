import React, { useContext } from 'react'
import useUserContext from '../context/UserContext';

function Profile() {

    const {user} = useUserContext();

  if(!user) return <div>Please Login</div>
  return (
    <div>
        
        <h2>Profile 1</h2>
        <p>{user.username}</p>
    </div>
  )
}

export default Profile