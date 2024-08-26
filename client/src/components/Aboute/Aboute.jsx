import React from 'react';
import './Aboute.css';
import images from '../../images/wallpaper.png';

const Aboute = () => {
    return (
        <section className='aboute' id='aboute'>
            <div className="aboute-containt" >
                <div className="aboute-page imgg">
                    <img src={images} alt="logo" />
                </div>
                <div className="aboute-page and">
                    <h1>Aboute <span>Me</span></h1>
                    <h4>Full Stack Developer</h4>
                    <p><i>With three years of experience as a web developer, I am a skilled individual. I have acquired ample expertise in creating well-designed and responsive websites. Over these three years, I have gained the necessary skills in development, both front-end and back-end, to meet the demands of the industry. My skills are limitless in enhancing user experience and functionality. My expertise extends through various technologies and frameworks, which consistently keeps me valuable in the market. Extensive support and innovation are my inclinations, and I ensure to be diligent in this ever-evolving field.</i></p>
                    <a href="#contact" className='btn-box'>More Aboute Me</a>
                </div>
            </div>
        </section>
    );
};

export default Aboute;