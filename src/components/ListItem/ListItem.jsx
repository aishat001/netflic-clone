import React from 'react';
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";

const ListItem = ({ item, index }) => {
  const [isHover, setisHover] = useState(false);
// console.log(item)

    return (
      <Link to="/watch" state={{  movie : item.trailer  }}>
      <div className=" w-[119px] h-[180px] sm:w-[285px]">
        
      <div
      className="listItem hidden"
      style={{ left: isHover && index * 285 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        src={item.img}
        alt="bgImage"
        width="100%"
        height="100%"
      />

      {isHover && (
        <div className='hoverr hidden'>
          <video src={item.trailer} autoPlay={`false`} loop className='hidden sm:block autoplay-hidden'/>
          <video src={item.trailer} autoPlay={`true`} loop className='autoplay-true hidden none' muted/>

          <div className="itemInfo flex flex-col p-2 ">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop flex flex-col">
                <span className="time">1 hr 14 min</span>
                <span className="limit">{item.limit}</span>
                <span className="time">{item.year}</span>
            </div>

            <div className="desc">
              {item.desc}
            </div>

            <div className="genre">{item.genre}</div>
          </div>
        </div>
      )}
    </div>

    </div>

    <div className=" sm:hidden">
      
    </div>

     </Link>
  );
};

export default ListItem;
