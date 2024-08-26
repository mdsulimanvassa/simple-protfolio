import React from 'react';
import './Services.css';
import 'boxicons';
import iimm from '../../images/wordpress-logo-60.png';
import iinn from '../../images/code-block-regular-60.png';
import iipp from '../../images/figma-logo-60.png';

const Services = () => {
    
    return (
        <section id='services'>
            <div className="containt">
                <h1>My <span>Services</span></h1>
                <div className="services-containt">
                    <div className="services">
                        <img src={iipp} alt="" />
                        <h2>DESIGN SKILLS</h2>
                        <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                        <a href="#contact">Lern More <span><box-icon name='right-arrow-alt' color='#0ef' ></box-icon></span></a>
                    </div>
                    <div className="services">
                        <img src={iinn} alt="upload your images" />
                        <h2>FRONT-END DEVELOPER</h2>
                        <p>I'm a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                        <a href="#contact">Lern More <span><box-icon name='right-arrow-alt' color='#0ef' ></box-icon></span></a>
                    </div>
                    <div className="services">
                        <img src={iimm} alt="" />
                        <h2>WORDPRESS DEVELOPER</h2>
                        <p>Passionate WordPress Developer with a track record of creating over 630+ websites. I find joy in crafting user-friendly, customizable sites.</p>
                        <a href="#contact">Lern More <span><box-icon name='right-arrow-alt' color='#0ef' ></box-icon></span></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;