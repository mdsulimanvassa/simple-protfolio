import React from 'react';
import Home from '../Home/Home';
import Navber from '../Navber/Navber';
import Aboute from '../Aboute/Aboute';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import ProfolioWebsite from '../ProfolioWebsite/ProfolioWebsite';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Protfolio = () => {
    return (
        <div>
            <Navber></Navber>
            <Home></Home>
            <Aboute></Aboute>
            <Services></Services>
            <Skills></Skills>
            <ProfolioWebsite></ProfolioWebsite>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Protfolio;