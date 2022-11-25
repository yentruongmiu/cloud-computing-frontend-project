import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.png";
import Constants from "Constants";

export const Header = (props) => {
  const active = props.active ? props.active : 'hero';

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="#hero" className={`nav-link scrollto ${active === 'hero' ? 'active' : ''}`}>Home</Link></li>
            <li><Link className={`nav-link scrollto ${active === 'about' ? 'active' : ''}`} to="#about">About</Link></li>
            <li><Link className={`nav-link scrollto ${active === 'portfolio' ? 'active' : ''}`} to="#portfolio">Portfolio</Link></li>
            <li><Link className={`nav-link scrollto ${active === 'skills' ? 'active' : ''}`} to="#skills">Skills</Link></li>
            <li><Link className={`nav-link scrollto ${active === 'education' ? 'active' : ''}`} to="#education">Education</Link></li>
            {/* <li><Link className={`nav-link scrollto ${active === 'testimonial' ? 'active' : ''}`} to="#testimonial">Testimonial</Link></li> */}
            <li><Link className={`nav-link scrollto ${active === 'blog' ? 'active' : ''}`} to="#blog">Blog</Link></li>
            <li><Link className={`nav-link scrollto ${active === 'contact' ? 'active' : ''}`} to="#contact">Contact</Link></li>
            <a href={Constants.REACT_APP_LOGIN_URL} className="glightbox btn-watch-video" title="Login"><i className="bi bi-play-circle"></i></a>
          </ul>
        </nav>
      </div>
    </header>
  )
}