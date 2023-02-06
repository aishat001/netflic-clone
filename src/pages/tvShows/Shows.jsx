import React from 'react'
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar';
import { ShowLists } from '../../data/data'
import "./Shows.scss";

const Shows = ({title}) => {
  return (
    <div className='shows bg-black pt-24'>
        <Navbar/>

        <div className='text-white text-2xl fw-lg relative ml-[10px] sm:ml-[50px] bottom-[-50px]'>
            {title}
        </div>
            {
                
        ShowLists.map((list, i) => (
          <List list={list} key={i}/>
        ))
      }

      <Footer/>
    </div>
  )
}

export default Shows
