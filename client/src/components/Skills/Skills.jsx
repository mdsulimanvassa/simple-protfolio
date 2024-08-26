import React from 'react';
import 'boxicons';
import './Skills.css';
import ReadialBars from '../ReadialBars/ReadialBars';

const Skills = () => {
    return (
        <section id='skills'>
             <h1 className='color-containt'>My <span>Skills</span></h1>
            <div className="flex-containt">
                <div className="container1">
                    <h1 className='heading1'>Technical Skills</h1>
                    <div className="technical-bars">
                        <div className="bar">
                            <box-icon name='html5' type='logo' color='#FF0000' ></box-icon>
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progrees-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <box-icon name='css3' type='logo' color='#0984e3' ></box-icon>
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progrees-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <box-icon name='javascript' type='logo' color='#f1c40f' ></box-icon>
                            <div className="info">
                                <span>Javascript</span>
                            </div>
                            <div className="progrees-line javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <box-icon name='python' type='logo' color='#273c75' ></box-icon>
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progrees-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <box-icon name='react' type='logo' color='#61dafb' ></box-icon>
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progrees-line react">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <ReadialBars></ReadialBars>
            </div>
        </section>
    );
};

export default Skills;