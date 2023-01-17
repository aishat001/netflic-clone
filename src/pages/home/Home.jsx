import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setlists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU0M2ZhYWYyYzY3YzRlNjU1Yjg3NiIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY2OTg1NTYxNiwiZXhwIjoxNjcwMjg3NjE2fQ.Rzx52RSdpzk8W7H6PcySPZ6gPCi-59uMg2BPwrfldUo",
            },
          }
        );
        // console.log(res);
        setlists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {/* <List/> */}
      {
        lists.map((list, i) => (
          <List list={list} key={i}/>
        ))
      }
    </div>
  );
};

export default Home;
