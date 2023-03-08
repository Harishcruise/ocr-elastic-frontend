import React from 'react'
import Style from './LoginCard.module.css';
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("Search");
    window.location.reload();
  };

  return (


    <>
    <div className ={Style.main}>
      <p className={Style.sign} align="center">Sign in</p>
      <form className={Style.form1} onSubmit={handleLogin}>
        <input className = {Style.un} type="text" align="center" placeholder="Username"></input>
          <input className = {Style.pass} type="password" align="center" placeholder="Password"></input>
            <button className= {Style.submit} align="center" type="submit">Sign in</button>
            <p className = {Style.forgot} align="center">
              <a href="/">Forgot Password?</a></p>
              </form>
              </div>
             
    </>
  )
}

export default LoginCard