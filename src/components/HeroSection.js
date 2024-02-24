import React from 'react';

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Creative Digital  Agency from the Future!</h1>
                <p>Spectrum Marketing Agency creates an innovative, functional, and lean business strategy for your success.</p>
                <button onClick={scrollToBottom}>Contact Us</button>
                <button onClick={scrollToBottom}>Learn More</button>
            </div>
            <div></div>
        </section>
    );
}

export default HeroSection;