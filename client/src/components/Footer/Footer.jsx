import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="">
            <footer>
                <div className="footer-containt">
                    <div className="all-services">
                        <p>© All Rights Reserved {formattedDate} | Suliman Vassa</p>
                    </div>
                </div>
            </footer>
                <div>
                    {isVisible && (
                        <button id="my-btn" className="scroll-btn" onClick={scrollToTop}>
                            <box-icon name='up-arrow-alt' animation='flashing' color='#f1c40f' ></box-icon>
                        </button>
                    )}
                </div>
        </div>
    );
};

export default Footer;