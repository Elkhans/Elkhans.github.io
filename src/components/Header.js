import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Logo from './logo2.png'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <nav>
                <img src={Logo} alt="Logo" />
                <ul id='words'>
                    <li key="home"><Link to="/home">Home</Link></li>
                    <li key="home"><Link to="/about-us">About Us</Link></li>
                    <li key="home"><Link to="/contact-us">Contact Us</Link></li>
                    <li key="home"><Link to="/home">Our Clients</Link></li>
                </ul>
                <ul id='socials'>
                    <li><a href="https://www.facebook.com/profile.php?id=100088549195482"><FaFacebook /></a></li>
                    <li><a href="https://www.linkedin.com/company/spectrum-marketing-agency-az"><FaLinkedin /></a></li>
                    <li><a href="https://www.instagram.com/spectrumagency.az/"><FaInstagram /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;