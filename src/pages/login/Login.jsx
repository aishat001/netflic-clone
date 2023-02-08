import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      navigate("/home")

  };


  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />

        </div>
      </div>

      {/* <div className="container flex  flex-col"> */}
      <form className="form " typeof='submit' onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Sign in</button>
        <span>New to Netflix ?
          <b> SignUp now</b>
        </span>

        <small>THis page is protected by Google recaptcha to ensure you are not aa bot
          <b>  Learn more</b>
        </small>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
