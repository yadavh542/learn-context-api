
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import useUserContext, { UserProvider } from './context/UserContext'

function App() {
  const [user, setUser1] = useState(null);

  const setUser=(newUser)=>{
    setUser1(newUser);
  }

  return (
    <>
    <UserProvider value={{user, setUser}}>
     
      <Login/>
      <Profile/>

    </UserProvider>
    </>
  )
}

export default App
