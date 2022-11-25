import React from "react";
import { Link } from "react-router-dom";

export const TopBar = (props) => {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <Link to="mailto:thi.truong@miu.edu">thi.truong@miu.edu</Link>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 641 818 2578</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="https://twitter.com/truthblue82" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
        
          <a href="https://www.facebook.com/truong.t.yen.10" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
          
          <a href="https://www.linkedin.com/in/thi-hong-yen-truong/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}