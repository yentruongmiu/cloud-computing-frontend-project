import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact = (props) => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Me</span></h3>
          <p>Feel free to get in touch with me.</p>
        </div>

        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <p>2067 LibertyVille Road, Appartment 1, Fairfield, IA 52556</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>thi.truong@miu.edu</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Phone</h3>
              <p>+1 641 819 2578</p>
            </div>
          </div>
        </div>
        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          {/* <div className="col-lg-6 ">
          </div> */}

          <div className="col-lg-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}