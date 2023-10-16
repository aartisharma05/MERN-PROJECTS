import React from 'react';
import { useState } from 'react';
const LoginPage = () => {

const [username, setUsername] = useState();
const [password, setPassword] = useState();

async function login(){
     fetch("http://localhost:4000/login",{
      method: "POST",
      body: JSON.stringify()
     })
}


  return (
    <form className="login" onClick = {login}>
      <h1>Login</h1>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) =>setPassword(ev.target.value)}
      />
      <label>Password</label>
      <input type="password" placeholder="password" value={password} 
      onChange={(ev) => setPassword(ev.target.value)}/>
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
