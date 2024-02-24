import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div>
                    <FaPhone className="icon" />
                    <a href="tel:+1234567890">+994 50 771 14 18</a>
                </div>
                <div>
                    <FaMapMarkerAlt className="icon" />
                    <p id='address'>6 Landau St. Baku, Az</p>
                </div>
                <div>
                    <FaWhatsapp className="icon" />
                    <a href="https://wa.me/1234567890">Send Message</a>
                </div>
                <div>
                    <FaFacebook className="icon" />
                    <a href="https://www.facebook.com/profile.php?id=100088549195482">Facebook</a>
                </div>
                <div>
                    <FaInstagram className="icon" />
                    <a href="https://www.instagram.com/spectrumagency.az/">Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;