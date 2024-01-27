import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);
  return (
    <div>
        
        <h2>Profile 1</h2>
        <p>{user.username}</p>
    </div>
  )
}

export default Profile