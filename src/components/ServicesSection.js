import React from 'react';


function ServicesSection() {
    return (
        <section className="services">
            <h2> Services</h2>
            <div className="services-grid">
                <div className="service">
                    <h3>Digital Marketing Strategy</h3>
                    <p>Developing comprehensive digital marketing strategies tailored to the client's goals, target audience, and industry landscape.</p>
                </div>
                <div className="service">
                    <h3>Search Engine Optimization (SEO)</h3>
                    <p>Optimizing website content and structure to improve organic search engine rankings and drive targeted traffic.</p>
                </div>
                <div className="service">
                    <h3>Social Media <br />Marketing</h3>
                    <p>Managing social media platforms (Facebook, Instagram, LinkedIn) to build brand awareness, engage with audiences, and drive website traffic.</p>
                </div>
                <div className="service">
                    <h3>Brand Identity and Design</h3>
                    <p>Crafting brand identities, logos, visual assets, and marketing collateral that reflect the client's brand values and resonate with the target audience.</p>
                </div>
                <div className="service">
                    <h3>Video Production and Marketing</h3>
                    <p>Creating compelling video content for marketing purposes, including ads, product demos, tutorials, and brand storytelling.</p>
                </div>
            </div>
        </section>
    );
}


export default ServicesSection;