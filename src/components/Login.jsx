import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user,setUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = async() => {
    // e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      await setUser({ username, password });
    }
    console.log("user", user)
  };
  
  useEffect(()=>{
    
    if(user){
      navigate("/", {replace:true})
    }

  },[user])

  return (
    <>
      <div
        style={{
          width: "400px",
          border: "2px solid black",
          padding: "10px",
          position: "absolute",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          placeItems: "center",
        }}
      >
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
