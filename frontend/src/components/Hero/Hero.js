import React from "react";
import { Link } from "react-router-dom";

export const Hero = (props) => {

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>YenTruong</span> Information</h1>
        <h2>I am a Software Engineer</h2>
        <div className="d-flex">
          <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
        </div>
      </div>
    </section>
  );
}