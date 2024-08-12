import React, { useState, useEffect } from "react";
import './Home.css';
import { Link } from 'react-router-dom';


// Import images
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import sponser1 from './assets/logo1.png';
import sponser2 from './assets/logo2.png';
import sponser3 from './assets/logo3.png';
import sponser4 from './assets/logo4.png';
import sponser5 from './assets/logo5.png';
import keyboard from './assets/keyboard.jpg';
import tutorial from './assets/tutorial image.gif';
import brand1 from './assets/brand1.png';
import brand2 from './assets/brand2.png';
import brand3 from './assets/brand3.jpg';
import brand4 from './assets/brand4.jpg';
import brand5 from './assets/brand5.jpeg';
import brand6 from './assets/brand6.jpeg';
import brand7 from './assets/brand7.jpg';


// Use the imported images in the array
const images = [slide1, slide2, slide3];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className="Home">
      
    
    <div className="container1">
      <div className="Motive">
        <h1>Create a unique, professional<br/> logo for your business</h1>
        <p>Kickstart your brand with business card designs, social media graphics,<br/> app icons, letterheads, and more</p>
      </div>
      <div className="btn">
      <Link to="/createLogo" className='logo-btn'><button>Create my logo</button></Link><br/>

      </div>

      <div className="slide-container">
      <img 
          src={images[currentIndex]} 
          alt={`Slide${currentIndex}`} 
          className={`slide-image slide-${currentIndex}`} 
        />
      </div>
    </div>
    <div className="container-2">
      <div className="sponsers">
        <img src={sponser1} alt ="image not found"></img>
        <img src={sponser2} alt ="image not found"></img>
        <img src={sponser3} alt ="image not found"></img>
        <img src={sponser4} alt ="image not found"></img>
        <img src={sponser5} alt ="image not found"></img>
      </div>

      <div className="about">
        <div className="left">
          <img src={keyboard} alt ="image not found"></img>
        </div>
        <div className="right">
            <h2>Build a beautiful brand<br/> on time and on budget</h2>
            <p>Kickstart your business with thousands of<br/> ready-to-use design assets.</p>
              <div className="features">
                <ul>
                  <li>Logo design files</li>
                  <li>Business card designs</li>
                  <li>Letterhead templates</li>
                  <li>Presentation templates
                  </li>
                </ul>
                <ul>
                  <li>Logo design files</li>
                  <li>Business card designs</li>
                  <li>Letterhead templates</li>
                  <li>Presentation templates
                  </li>
                </ul>
              </div>

              
        </div>
        
      </div>
      <div className="tutorial-container">
          <h2>Instantly customize and export</h2>
          <p>Right in your browser, no designer or software needed</p>
      </div>
      <div className="info">
            <img src={tutorial}></img>
        </div>
      
    </div>
    <div className="container3">
      <div className="square1">

      </div>
      <div className="square2">
        
      </div>

      <div className="brand-container">
        <div className="brands">
          <h2>Latest customer<br/> creations</h2>
          <p>See why over 108,704 users<br/> have created a logo with<br/> Brandmark.io</p>
          <img src={brand1}></img>
          <img src={brand2}></img>
          <img src={brand3}></img>
          <img src={brand4}></img>
          <img src={brand5}></img>
          <img src={brand6}></img>
          <img src={brand7}></img>
        </div>

        <div className="design-creation">
          <h1>Create your unique logo design</h1>
          <p>generate unlimited logos for free</p>
          <div className="btn1">
          <Link to="/createLogo" className='logo-btn'><button>Create my logo</button></Link><br/>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="last-container">
          <div className="one">
          <Link to="/support" className='flink'><h4>Create your logo</h4></Link><br/>
            <p>Try Brandmark for free, no<br/> account needed</p>
          </div>
        
        <div className="two">
        <Link to="/support" className='flink'><h4>Support</h4></Link><br/>
        <p>Have questions or need help? Start here.</p>
        </div>

        <div className="three">
        <Link to="/tools" className='flink'><h4>Tools</h4></Link><br/>
        <p>Check out our free tools for color, font and logo design</p>
        </div>
        <div className="four">
        <h4>Terms of services</h4>
        <h4>Privacy policy</h4>
        </div>
        
      </div>
      <div className="footer-design">
        <div className ="square3">

        </div>
        <div className="square4">

        </div>
        <div className ="square5">
          
        </div>
        <div className="square6">

        </div>
      </div>
    </footer>
    </div>
  </>
  );
}
export default Slideshow;
