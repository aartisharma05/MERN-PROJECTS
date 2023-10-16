import React, { useState } from "react";
const RegisterPage = () => {


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function register(ev){
  ev.preventDefault();
  await fetch('http://localhost:4000/register',{
    method:'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
  });
}


  return (
    <form className="register" onClick={register}>
      <h1>Register</h1>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
