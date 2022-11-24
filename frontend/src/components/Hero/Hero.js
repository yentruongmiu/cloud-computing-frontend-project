import React from "react";
import { Link } from "react-router-dom";

export const Hero = (props) => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to my site <span>YenTruong</span> Information</h1>
        <h2>I am a Software Engineer</h2>
      </div>
    </section>
  );
}