import React from 'react';
import './ProfolioWebsite.css';
import uixi from '../../images/uixi.png';
import disctop from '../../images/disctop.png';
import website from '../../images/website.png';
import 'boxicons';

const ProfolioWebsite = () => {
    return (
        <section id="protfolio">
            <div className='project'>
                <div className="main-text" id='projects'>
                    <h1>Latest <span>Project</span></h1>
                    <div className="profolio-containt">
                        <div className="row frist">
                            <img src={uixi} alt="" />
                            <div className="layer">
                                <h5>UI/UX</h5>
                                <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                                <a href="#contact"><box-icon name='link-external' color='#21b325' ></box-icon></a>
                            </div>
                        </div>
                        <div className="row frist">
                            <img src={disctop} alt="" />
                            <div className="layer">
                                <h5>UI/UX</h5>
                                <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                                <a href="#contact"><box-icon name='link-external' color='#21b325' ></box-icon></a>
                            </div>
                        </div>
                        <div className="row frist">
                            <img src={website} alt="" />
                            <div className="layer">
                                <h5>UI/UX</h5>
                                <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                                <a href="#contact"><box-icon name='link-external' color='#21b325' ></box-icon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfolioWebsite;