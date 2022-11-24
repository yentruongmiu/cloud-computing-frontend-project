import React from "react";

import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="#hero" className="nav-link scrollto active">Home</Link></li>
            <li><Link className="nav-link scrollto" to="#about">About</Link></li>
            <li><Link className="nav-link scrollto" to="#projects">Projects</Link></li>
            <li><Link className="nav-link scrollto" to="#skills">Skills</Link></li>
            <li><Link className="nav-link scrollto" to="#education">Education</Link></li>
            <li><Link className="nav-link scrollto" to="#testimonial">Testimonial</Link></li>
            <li><Link className="nav-link scrollto" to="#blog">Blog</Link></li>
            <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
            <Link to="/" className="glightbox btn-watch-video" title="Login"><i className="bi bi-play-circle"></i></Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}