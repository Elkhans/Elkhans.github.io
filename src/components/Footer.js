import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import companyLogo from './logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={companyLogo} alt="Company Logo" />
                </div>
                <div className="footer__contact-info">
                    <p>6 Landau str. Baku, Azerbaijan</p>
                    <p>spectrum.fullservices@gmail.com</p>
                    <p>+994 50 771 14 18</p>
                </div>
                <div className="footer__social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100088549195482">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/company/spectrum-marketing-agency-az/">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/spectrumagency.az">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;