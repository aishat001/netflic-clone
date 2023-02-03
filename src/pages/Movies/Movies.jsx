import React from 'react'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar';
import { ShowLists } from '../../data/data'
import "./Movies.scss";

const Movies = () => {
  return (
    <div className='movies bg-black pt-24'>
        <Navbar/>

        <div className='text-white text-2xl fw-lg relative ml-[50px] bottom-[-50px]'>
            Movies
        </div>
            {
                
        ShowLists.map((list, i) => (
          <List list={list} key={i}/>
        ))
      }
    </div>
  )
}

export default Movies
