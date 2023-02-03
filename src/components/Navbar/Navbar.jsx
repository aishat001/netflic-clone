import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };
  return (
    <div className={`${isScrolled === false ? "navbar" : "navbar isScolled"} `}>
      <div className="flex-column navContainer m-auto flex items-center w-[85vw] sm:w-[91.5vw]">
        <div className="left inline-flex items-center w-[100%] justify-between sm:justify-start sm:gap-5">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo" className="hidden sm:flex"/>
  <img 
            src="images/mobile-logo.png"
            alt="netflix logo" className=" sm:hidden"/>
          <Link to="/home"><span className="hidden sm:inline-flex">Home</span></Link>
          <Link to="/shows"><span>Tv Shows</span></Link>
          <Link to="/movies"><span>Movies</span></Link>
          {/* <Link to="/watch"><span className="hidden sm:inline-flex">Watch</span></Link> */}
          <Link to="/my-lists"><span>My List</span></Link>
        </div>
        <div className="right ml-auto  items-center hidden md:inline-flex">
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
            <span>Setting</span>
            <Link to="/"><span>Logout</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
