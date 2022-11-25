import React from "react";

export const About = (props) => {
  return (
    <section id="about" className="featured-services">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Me</span></h3>
          <p>Full Stack NodeJS Developer</p>
        </div>

        <div className="row">

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> */}
              <h4 className="title">Overview</h4>
              <p className="description">Skilled software developer with more than 15 years of hands-on IT experience guiding the full stack implementation of efficient.</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="icon"><i className="bx bx-file"></i></div> */}
              <h4 className="title">Proficiency</h4>
              <p className="description">Creative and effective in high-pressure environments both independently and within a team, with strong knowledge of NoSQL databases.</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="icon"><i className="bx bx-tachometer"></i></div> */}
              <h4 className="title">Technology</h4>
              <p className="description">Technological focus includes JavaScript, NodeJS, ReactJS, Angular, and MongoDB.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}