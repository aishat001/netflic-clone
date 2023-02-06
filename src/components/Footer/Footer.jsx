import React from 'react'
import {Home, Search, Download, Dehaze} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-[100vw] flex justify-center fixed bottom-[0px] bg-black sm:relative '>
        
        <div className="bg-black justify-between w-[91.5vw] items-center m-auto h-[200px] hidden sm:inline-flex" >
      <div className='inline-flex gap-1'>
        <img src="images/facebook-twitter.png" alt="social media" />
        <img src="images/google.png" alt="social media" />

      </div>

      <div>
        <img src="images/appstore.png" alt="social media" />

      </div>
    </div>

    <div className='text-[#C4C4C4] w-[90%] flex justify-between sm:hidden p-3'>
        <Link to="/home"><span><Home/></span></Link>
        <Link to=""><span><Search/></span></Link>
        <Link to=""><span><Download/></span></Link>
        <Link to=""><span><Dehaze/></span></Link>

    </div>
    </div>

  )
}

export default Footer
