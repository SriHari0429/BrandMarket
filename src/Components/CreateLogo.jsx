import React from 'react';
import { Link } from 'react-router-dom';
import './CreateLogo.css';

function CreateLogo(props) {
    return (
        <div>
            <div className='brand-creation-container'>
                <div className='left-name'>
                    <h2>BRAND NAME</h2>
                    <p>The best brand names are short, memorable and easy to Google</p>
                    <Link to="/login" className='login-btn'><button>Login</button></Link>
                </div>
                <div className='right-name'>
                    <input type='text' name='brandname' placeholder='Brand name'></input>
                    <input type='text' name='brandname' placeholder='Slogan (Optional)'></input>
                </div>
            </div>
        </div>
    );
}

export default CreateLogo;