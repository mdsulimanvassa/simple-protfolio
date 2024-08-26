import React, { useEffect } from 'react';
import './Home.css';
import images from '../../images/wallpaper.png';
import 'boxicons';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        var typed = new Typed('.text', {
          strings: ['Frontend Developer', 'Web Developer'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          loop: true
        });
    
         return () => {
          typed.destroy();
        };
      }, []);
    return (
        <section className='home' id='home'>
            <div className="half-width home-content">
                <h3>Hello, It's Me</h3>
                <h1>Suliman Vassa</h1>
                <h3>And I'm a <span className='text'></span></h3>
                <p>I'm a web Designer with extensive experience for over 3 years.
                expertise is to create and website design,Frontend design,and many more.... 
                </p>
                <div className="home-scr">
                    <a  href="https://github.com/mdsulimanvassa/" > <box-icon name='github' type='logo' flip='horizontal' color='rgba(41,144,32,0.97)' ></box-icon></a>
                    <a href="https://www.facebook.com/profile.php?id=61552658534428" > <box-icon name='facebook' type='logo' color='rgba(43,148,34,0.97)' ></box-icon></a>
                </div>
                <a href="#contact" className='btn-box'>More Aboute Me</a>
            </div>
            <div className="half-width third">
                <img src={images} alt="logo" />
            </div>
        </section>
    );
};

export default Home;