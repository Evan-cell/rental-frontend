import React from 'react'
import "./homepage.scss";
import Searchbar from '../../components/searchbar/Searchbar';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <div className='homepage'>
      <div className="textcontainer">
        <div className="wrapper">
        <h1 className='title'>Discover Your Ideal Living Space. Start Your Search Today</h1>
        <Link to="/list">
        <button className='check'> <img className='arrow' src="/arrow.png" alt="" />  Checkout Our Houses</button>
        </Link>
        <p className='description'>Embark on a fulfilling journey to discover your ideal living space. Start your search today to find the perfect rental that aligns with your lifestyle, preferences, and aspirations. Your dream home awaits, and the adventure begins now.</p>
        <Searchbar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
        </div>
        </div>
      </div>
      
      <div className="imagecontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Homepage
