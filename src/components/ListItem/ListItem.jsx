import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";

const ListItem = ({ item, index }) => {
  const [isHover, setisHover] = useState(false);
  const [movie, setmovie] = useState({});


    useEffect(() => {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU0M2ZhYWYyYzY3YzRlNjU1Yjg3NiIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY2OTg1NTYxNiwiZXhwIjoxNjcwMjg3NjE2fQ.Rzx52RSdpzk8W7H6PcySPZ6gPCi-59uMg2BPwrfldUo",
            },
          }
          );
              // console.log(res);

          setmovie(res.data)
        } catch (error) {
          console.log(error);
        }
      }
      getMovie();
    }, [item]);

    return (
      <Link to="/watch" state={{  movie : movie  }}>
      <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        src={movie.img}
        alt="bgImage"
        width="100%"
        height="100%"
      />

      {isHover && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />

          <div className="itemInfo flex flex-col p-2 ">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop flex flex-col">
                <span className="time">1 hr 14 min</span>
                <span className="limit">{movie.limit}</span>
                <span className="time">{movie.year}</span>
            </div>

            <div className="desc">
              {movie.desc}
            </div>

            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};

export default ListItem;
