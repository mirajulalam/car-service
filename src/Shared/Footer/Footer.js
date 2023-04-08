import React from 'react';
import Logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="footer p-24 bg-black text-white">
        <div>
          <img src={Logo} alt='header image'/>
          <p>Weero Digital Ltd.</p>
        </div> 
        <div>
          <span className="footer-title text-white">About</span> 
          <a href="/" className="link link-hover">Home</a> 
          <a href="/services" className="link link-hover">Services</a> 
          <a href="/contact" className="link link-hover">Contact</a> 
        </div> 
        <div>
          <span className="footer-title text-white">Company</span> 
          <a href="/" className="link link-hover">Why car Doctor</a> 
          <a href="/" className="link link-hover">About</a> 
        </div> 
        <div>
          <span className="footer-title text-white">Support</span> 
          <a href="/" className="link link-hover">Support Center</a> 
          <a href="/" className="link link-hover">Feedback</a> 
          <a href="/" className="link link-hover">Accesbllity</a>
        </div>
      </footer>
    );
};

export default Footer;