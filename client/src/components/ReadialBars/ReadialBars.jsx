import React from 'react';
import './ReadialBars.css';

const ReadialBars = () => {
    return (
        <div className="container1">
            <h1 className='heading1'>Professional Skills</h1>
            <div className="readial-bars">
                <div className="readial-bar">
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className='progress-bar' cx={'100'} cy={'100'} r={'90'}></circle>
                        <circle className='path path-1' cx={'50%'} cy={'50%'} r={'40%'}></circle>
                    </svg>
                    <div className="percentage">90%</div>
                    <div className="text">Creativity</div>
                </div>
                <div className="readial-bar">
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className='progress-bar' cx={'100'} cy={'100'} r={'90'}></circle>
                        <circle className='path path-2' cx={'50%'} cy={'50%'} r={'40%'}></circle>
                    </svg>
                    <div className="percentage">65%</div>
                    <div className="text">Communication</div>
                </div>
                <div className="readial-bar">
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className='progress-bar' cx={'100'} cy={'100'} r={'90'}></circle>
                        <circle className='path path-3' cx={'50%'} cy={'50%'} r={'40%'}></circle>
                    </svg>
                    <div className="percentage">75%</div>
                    <div className="text">Problem Solving</div>
                </div>
                <div className="readial-bar">
                    <svg x='0px' y='0px' viewBox="0 0 200 200">
                        <circle className='progress-bar' cx={'100'} cy={'100'} r={'90'}></circle>
                        <circle className='path path-4' cx={'50%'} cy={'50%'} r={'40%'}></circle>
                    </svg>
                    <div className="percentage">85%</div>
                    <div className="text">TeamWork</div>
                </div>
            </div>
        </div>
    );
};

export default ReadialBars;