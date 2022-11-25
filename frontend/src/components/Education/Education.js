import React from "react";

import miuImg from "assets/images/miu.png";

export const Education = (props) => {
  return (
    <section id="education" className="services section-bg">
      <div className="container aos-init aos-animate" data-aos="fade-up" >
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><img src={miuImg} alt="" width="40" /></div>
              <h4>Master of Science in Computer Science</h4>
              <p>(In progress via distance education; expected completion December 2024)
              Maharishi International University – Fairfield, Iowa</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box" >
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4>Bachelor of Science in Information Technology</h4>
              <p>Post and Telecommunications Institute of Technology – Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

