import React from "react";

export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container modify py-4">
        <div className="copyright">
          &copy; Copyright 2022, by <a href="https://bootstrapmade.com/"><strong><span>BizLand </span></strong></a>
        </div>
        
        <div className="social social-links">
          <a href="https://twitter.com/truthblue82" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></a>

          <a href="https://www.facebook.com/truong.t.yen.10" className="facebook" target="_blank"><i className="bx bxl-facebook"></i></a>
          
          <a href="https://www.linkedin.com/in/thi-hong-yen-truong/" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>

        <div className="credits">
          Developed by Thi Hong Yen Truong
        </div>
      </div>
    </footer>
  );
}