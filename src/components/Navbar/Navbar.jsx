import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import React from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };
  return (
    <div className={`${isScrolled === false ? "navbar" : "navbar isScolled"} `}>
      <div className="flex-column navContainer m-auto flex w-[85vw] items-center sm:w-[calc(100vw-100px)]">
        <div className="left inline-flex w-[100%] items-center justify-start sm:justify-start sm:gap-5">
          <Link to="/home">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="netflix logo"
              className="hidden sm:flex"
            />
          </Link>

          <Link to="/home">
            {" "}
            <img
              src="images/mobile-logo.png"
              alt="netflix logo"
              className=" sm:hidden"
            />
          </Link>
          <Link to="/home">
            <span className="hidden sm:inline-flex">Home</span>
          </Link>
          <Link to="/shows">
            <span className="ml-[20px] sm:ml-[0px]">Tv Shows</span>
          </Link>
          <Link to="/movies">
            <span className="ml-[20px] sm:ml-[0px]">Movies</span>
          </Link>
          {/* <Link to="/watch"><span className="hidden sm:inline-flex">Watch</span></Link> */}
          <Link to="/my-lists">
            <span className="ml-[20px] sm:ml-[0px]">My List</span>
          </Link>
        </div>
        <div className="right ml-auto  hidden items-center md:inline-flex">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />

          <img
            src="/images/userImage.png"
            alt="user-img"
            className="user mx-3"
          />
        </div>

        <div className="profile hidden md:inline-flex">
          <ArrowDropDown className="icon" />

          <div className="options">
           <div className="option">
           <span>Setting</span>
            <Link to="/">
              <span>Logout</span>
            </Link>
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
