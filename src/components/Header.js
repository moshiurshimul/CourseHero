import React from 'react';
import Logo from '../Logo.png';
import './Header.css';

const Header = () => {
    return (
     <div className="header">
        <img src={Logo} alt="website-logo"/>
        <nav>
            <a href="/courses">Courses</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
        </nav>
     </div>
    );
};

export default Header;