import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Contact" , link: "/emergency"},
        
    ]
    const ourAddress = [
        {name: "Narayanganj, Dhaka:1420 | Bangladesh" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const teachers = [
        {name: "LILY CARTER" , link: "/lily"},
        {name: "JENNIFER LAWRENCE" , link: "/jennifer"},
        {name: "REGINA SPEKTOR" , link: "/regina"},
        {name: "RICHARD HILL" , link: "/richard"},
        
    ]
    const services = [
        {name: "Mathematics" , link: "/mathematics"},
        {name: "Art" , link: "/art"},
        {name: "Active Learning" , link: "/active-learning"},
        {name: "Swimming & Sport" , link: "/swimming-sport"},
        {name: "Geography" , link: "/geography"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Report a problem"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Contact Our Teacher" menuItems={teachers}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;