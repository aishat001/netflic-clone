import React from 'react';
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Featured.scss";

const Featured = ({ type }) => {

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? " Movies" : "Series"}</span>

          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="images/MoviePoster.png"
        alt="bgImage"
        width="100%"
        height="100%"
        className=" hidden sm:flex"
      />
      <img
        src="images/mobilePoster.png"
        alt="bgImage"
        width="100%"
        height="100%"
        className="flex sm:hidden"
      />

      <div className="info flex flex-col justify-center hidden sm:flex">
        <span className="title hidden sm:flex">
          <span className="absolute ml-[75px] text-lg ">The</span>
          WALKING DEAD
        </span>

        <span className="hidden sm:flex"s>
          Season <span className="text-red-600">10</span> | Episode{" "}
          <span className="text-red-600">01</span> | Lines we cross
        </span>


        <span className="desc hidden sm:flex">
          We pick back up with the group in Oceanside continuing to train in
          case the Whisperers return. Tensions are high as our heroes struggle
          to hold onto their concept of civilization.{" "}
        </span>

        <div className="button hidden sm:flex">
          <button className="play">
            <Link to="/watch" state={{ movie: "videos/trailer.mp4" }}>
              <PlayArrow />
              <span>Play</span>
            </Link>
          </button>

          <button className="infobutton">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>

      <div className=" mobileInfo w-[100%] absolute bottom-[320px] text-white ">
      <div className="absolut bottom-[200px] flex flex-col justify-center !sm:hidden !m-0">
        <span className="flex title !text-3xl sm:hidden m-auto fw-700 text-[50px]">Stranger <br/> Things</span>
        <span className="flex sm:hidden m-auto">
        Shows textTwo TV Shows US
s
        </span>

        <div className="button flex sm:hidden justify-center">
          <button className="play">
            <Link to="/watch" state={{ movie: "videos/trailer.mp4" }}>
              <PlayArrow />
              <span>Play</span>
            </Link>
          </button>

          <button className="infobutton">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
      </div>


      <div className="block"></div>
    </div>
  );
};

export default Featured;
