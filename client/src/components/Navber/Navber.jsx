import React, { useState } from 'react';
import './Navber.css';
import 'boxicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navber = () => {
    const  [menuOpen, setMenuOpen] = useState(false);
    const [cart,] = useCart();
    return (
        <>
            <header className='header'>
                <a className="logo" href={"/protfolio"}>Protfolio<span className='dood'>.</span></a>
                <nav className='navbar' id='togglebtn' >
                    <ul className={menuOpen ? 'open' : ''}>
                        <a className='active' style={{ "--i": 1 }} href="#home">Home</a>
                        <a href="#aboute" style={{ "--i": 2 }}>Aboute</a>
                        <a href="#services" style={{ "--i": 3 }}>Services</a>
                        <a href="#skills" style={{ "--i": 4 }}>Skill</a>
                        <a href="#protfolio" style={{ "--i": 5 }}>Protfolio</a>
                        <a href="#contact" style={{ "--i": 6 }}>Contact</a>
                    </ul>
                </nav>
                <div className="menu-icon">
                    <button  onClick={() => {setMenuOpen(!menuOpen)}}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </header>
        </>
    );
};

export default Navber;