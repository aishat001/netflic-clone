import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Featured.scss";

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU0M2ZhYWYyYzY3YzRlNjU1Yjg3NiIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY2OTg1NTYxNiwiZXhwIjoxNjcwMjg3NjE2fQ.Rzx52RSdpzk8W7H6PcySPZ6gPCi-59uMg2BPwrfldUo",
          },
        });

        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content.img);

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
        src={content.img}
        alt="bgImage"
        width="100%"
        height="100%"
      />

      <div className="info flex flex-col">
        {/* <span className="title">{content.title}</span> */}
        <span className="desc">
         {content.desc}
        </span>

        <div className="button">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className="infobutton">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
