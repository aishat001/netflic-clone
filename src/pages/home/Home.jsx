import React from "react";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

import { MobileMovieLists, MovieLists } from "../../data/data";
import Footer from "../../components/Footer/Footer";

const Home = ({ type }) => {


  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <div className="lists hidden sm:block">
      {
        MovieLists.map((list, i) => (
          <List list={list} key={i} />
        ))
      }
      </div>

      <div className="lists block sm:hidden">
      {
        MobileMovieLists.map((list, i) => (
          <List list={list} key={i} />
        ))
      }
      </div>
      <Footer/>
 
    </div>
  );
};

export default Home;
