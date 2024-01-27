import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  // const [count, setCount] = useState(0)
  const {user} = useContext(UserContext);

  return (
    <>
    
      {
        user ? <Profile/> : <Login/>
      }
      
      <p>
        Click on the Vite and React logos to learn more
      </p>
    
    </>
  )
}

export default App
