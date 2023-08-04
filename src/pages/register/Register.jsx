import React from 'react';
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
    navigate("/home")
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />

          <Link to="/login">
          <button className="loginBtn">Sign in</button>
            </Link>
        </div>
      </div>

      <div className="container flex  flex-col">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email && (
          <form className="input" onSubmit>
            <input type="email" placeholder="Email address" value={email} ref={emailRef} required/>
            {/* <Link to="/home"> */}
              <button onClick={handleStart}>Get started</button>
              {/* </Link> */}
          </form>
        ) 
}

{
        email && (
          <form className="input">
            <input type="password" placeholder="password" value={password} ref={passwordRef} />
            <button onClick={handleFinish}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
