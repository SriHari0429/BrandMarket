import React from 'react';
import './Tools.css';
import r from './assets/letter-r.png';
import c from './assets/letter-c.png';
import w from './assets/letter-w.png';
import f from './assets/letter-f.png';
function Tools() {
    return (
        <>
            <div className='tools-container'>
                <div className='header'>
                    <h1>BRANDMARKET TOOLS</h1>
                    <p>Use our free AI-powered design tools to get<br/>
                    color and font ideas for your next logo project</p>
                </div>

                <div className='cards'>

                    <div className='top'>
                
                        <div className='card1'>
                            <img src={w} alt='img not found'></img>
                            <h2>AI Color Wheel</h2>
                            <p>Automatically colorize your graphic and logo designs</p>
                        </div>
                        <div className='card2'>
                            <img src={r} alt='img not found'></img>
                            <h2>Logo Rank</h2>
                            <p>Uploda your logo and see how it rates on a number of objective measures</p>
                        </div>
                    </div>
                    

                    <div className='bottom'>
                        <div className='card3'>
                            <img src={c} alt='img not found'></img>
                            <h2>Logo crunch</h2>
                            <p>Make a multi-resolution logo for use in favicons, Android and ios apps</p>
                        </div>
                        <div className='card4'>
                            <img src={f} alt='img not found'></img>
                            <h2>Font generator</h2>
                            <p>Get font pairing ideas for your website, shop or blog</p>
                        </div>
                    </div>
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

export default Tools;