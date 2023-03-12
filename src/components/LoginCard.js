import React, { useState } from "react";
import Style from './LoginCard.module.css';
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

function LoginCard() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginLoader, setLoginLoader] = useState(false)
  // const user = JSON.parse(localStorage.getItem("user"));

  var bodyFormData = new FormData();
  bodyFormData.append('username', username); //Current User
  bodyFormData.append('password', password); //Current Password
  const handleLogin = async (e) => {
    setLoginLoader(true)
    e.preventDefault();
    try {
      await AuthService.login(bodyFormData).then(
        (user) => {
          if(user.data.status === "success"){
          console.log(user.data.status)
          navigate("Search");
          window.location.reload();
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
    setLoginLoader(false)
    // navigate("Search");
    // window.location.reload();
  };

  return (


    <>
    <div className ={Style.main}>
      <p className={Style.sign} align="center">Sign in</p>
      <form className={Style.form1} onSubmit={handleLogin}>
        <input className = {Style.un} type="text" value={username} align="center" placeholder="Username" onChange={(e) => setusername(e.target.value)} required></input>
          <input className = {Style.pass} type="password" value={password} align="center" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required></input>
            <button className= {Style.submit} align="center" type="submit">{(loginLoader)?<>Sign in <img alt="" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" width={15} height={15}/> </>: "Sign in"}</button>
            <p className = {Style.forgot} align="center">
              <a href="/">Forgot Password?</a></p>
              </form>
              </div>
             
    </>
  )
}

export default LoginCard