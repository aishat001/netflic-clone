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
    <div className={isScrolled === false ? "navbar" : "navbar isScolled"}>
      <div className="flex-column navContainer m-auto flex items-center">
        <div className="left inline-flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo" />

          <Link to="/"><span className="">Homepage</span></Link>
          <Link to="/series"><span>Series</span></Link>
          <Link to="/movies"><span>Movies</span></Link>
          <Link to="/series"><span>Watch</span></Link>
          <Link to="/series"><span>My List</span></Link>
        </div>
        <div className="right ml-auto inline-flex items-center">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />

          <img
            src="/images/userImage.png"
            alt="user-img"
            className="user mx-3"
          />
        </div>

        <div className="profile">
          <ArrowDropDown className="icon" />

          <div className="options">
            <span>Setting</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
