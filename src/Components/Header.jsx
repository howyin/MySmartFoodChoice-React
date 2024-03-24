import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() 
{
    return (
        <nav className='nav'>
            <div className="header-content">
                <h2 className='title'>Smart Food Choice</h2>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/PartnerShip">Partnership</Link></li>
                    <li><Link to="/ContactUs">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

