import React from 'react';
import './Support.css';

function Support() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:sriharinaidu951@gmail.com?subject=Contact%20Us&body=Hello%20Srihari,';
      };
    return (
        <div className='contact'>
            <div className='cont'>
                <h1>Any Queries?</h1>
                <button onClick={handleEmailClick} className='butt'>MAIL US</button>
                <p>We will get back to you as quick as possible...</p>
            </div>
        </div>
    );
}

export default Support;