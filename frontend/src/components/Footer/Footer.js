import React from "react";
import {
  Link
} from "react-router-dom";
export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container modify py-4">
        <div className="copyright">
          &copy; Copyright 2022, <Link to="https://bootstrapmade.com/"><strong><span>BizLand template</span></strong></Link>
        </div>
        
        <div className="social social-links">
          <Link to="https://twitter.com/truthblue82" className="twitter"><i className="bx bxl-twitter"></i></Link>

          <Link to="https://www.facebook.com/truong.t.yen.10" className="facebook"><i className="bx bxl-facebook"></i></Link>
          
          <Link to="https://www.linkedin.com/in/thi-hong-yen-truong/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
        </div>

        <div className="credits">
          Developed by Thi Hong Yen Truong
        </div>
      </div>
    </footer>
  );
}