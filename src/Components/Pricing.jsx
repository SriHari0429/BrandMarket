import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Pricing.css'
import basic from './assets/cube.png';
import designer from './assets/designer.png';
import enterprise from './assets/revenue.png';
import slide4 from './assets/slide1.png';
import slide5 from './assets/slide2.png';
import slide6 from './assets/slide3.png';
import brand from './assets/brand-image.png'

const images = [slide4, slide5, slide6];
function Pricing() {
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
            <div className='container'>
                <h1>Choose the right package for your brand</h1>
                <div className='pricing-cards'>
                    <div className='pricing-card1'>
                        <img src={basic} alt='Image not found'></img>
                        <h2>BASIC</h2>
                        <h3>$25</h3>
                        <p>one-time</p>
                        <hr/>
                        <ul>
                            <li>Logo files in PNG format</li>
                        </ul>
                    </div>
                    <div className='pricing-card2'>
                    <img src={designer} alt='Image not found'></img>
                        <h2>DESIGNER</h2>
                        <h3>$65</h3>
                        <p>one-time</p>
                        <hr/>
                        <ul>
                            <li>Logo source files</li>
                            <li>Brand style guide</li>
                            <li>Business card designs</li>
                        </ul>
                    </div>
                    <div className='pricing-card3'>
                    <img src={enterprise} alt='Image not found'></img>
                        <h2>ENTERPRISE</h2>
                        <h3>$175</h3>
                        <p>one-time</p>
                        <hr/>
                        <ul>
                            <li>Everything in the designer package</li>
                            <li>Up to 10 fully original concepts created by our design team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="slide-container">
                <img 
                    src={images[currentIndex]} 
                    alt={`Slide${currentIndex}`} 
                    className={`slide-image slide-${currentIndex}`} />
            </div>
            <div className="quotes">
                <div className="section-one">
                    <div className="left-quote color1">
                        <img src={brand}alt='image not found'></img>
                    </div>
                    <div className="right-quote color1">
                        <h2>Need a tweak to your design?</h2>
                        <p>We’ll do it for you, absolutely free.</p>
                    </div>
                </div>
                <div className="section-two">
                    <div className="left-quote color2">
                        <h2>No more designer anxiety</h2>
                        <p>Get your logo instantly, not in weeks.</p>
                    </div>
                    <div className="right-quote color2">
                    <img src={brand}alt='image not found'></img>
                    </div>
                </div>

                <div className="section-one">
                    <div className="left-quote color3">
                        <img src={brand}alt='image not found'></img>
                    </div>
                    <div className="right-quote color3">
                        <h2>No monthly charges</h2>
                        <p>Pay once, get access to our branding tools forever.</p>
                    </div>
                </div>
                <div className="section-two">
                    <div className="left-quote color4">
                        <h2>Full copyright included</h2>
                        <p>For use in commercial and personal projects</p>
                    </div>
                    <div className="right-quote color4">
                    <img src={brand}alt='image not found'></img>
                    </div>
                </div>
                <div className="section-one">
                    <div className="left-quote color1">
                        <img src={brand}alt='image not found'></img>
                    </div>
                    <div className="right-quote color1">
                        <h2>Unlimited revisions</h2>
                        <p>Modify your logo at any time, even after purchase</p>
                    </div>
                </div>
            </div>
                <div className="design-creation">
          <h1>Create your unique logo design</h1>
          <p>generate unlimited logos for free</p>
          <div className="btn1">
          <Link to="/createLogo" className='logo-btn'><button>Create my logo</button></Link><br/>

          </div>
        </div>   
            
            <footer>
      <div className="last-container">
          <div className="one">
            <h4>Create your logo</h4>
            <p>Try Brandmark for free, no<br/> account needed</p>
          </div>
        
        <div className="two">
        <h4>Support</h4>
        <p>Have questions or need help? Start here.</p>
        </div>

        <div className="three">
        <h4>Tools</h4><br/>
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
        </>
    );
}

export default Pricing;