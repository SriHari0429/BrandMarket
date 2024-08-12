import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import google from './assets/google.png';
import gmail from './assets/gmail.png';
function Login(props) {
    return (
        <div>
            <div className='log'>

            
            <div className='login-container'>
                <div className='login-options'>
                    <button className='google'> <img src={google} alt='img1'></img>Login with google</button>
                    <button className='mail'><img src={gmail} alt='img2'></img>Login with mail id</button>
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
    );
}

export default Login;