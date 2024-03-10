import React from 'react';
import './Header.css';

function Header() 
{
    return (
        <nav className='nav'>
            <div className="header-content">
                <h1 className='title'>Smart Food Choice</h1>
                <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Review</a></li>
                    <li><a href="#">Partnership</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

