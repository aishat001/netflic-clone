import React from 'react';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
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
          <form className="form ">
            <h1>Sign in</h1>
            <input type="email" placeholder="email or phone number" ref={emailRef} />
            <input type="number" placeholder="Phone number" ref={emailRef} />
            <button><Link to="/home">Sign in</Link></button>
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
