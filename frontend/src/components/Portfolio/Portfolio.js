import React from "react";
import cloudImg from "assets/images/CloudComputingFinalProject.png";

export const Portfolio = (props) => {
  return (
    <section id="portfolio" className="pricing section-bg">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Academic Portfolio</h2>
          <h3><span>Projects</span> I've done at <span>MIU</span></h3>
          <p></p>
        </div>

        <div className="row" style={{marginBottom: "2rem"}}>
          <div className="col-lg-2 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
            <h5>Cloud Computing</h5>
            <p>Personal Information website</p>
          </div>
        </div>
        <div className="row" style={{marginBottom: "2rem"}}>
          <div className="col-lg-12 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img src={cloudImg} className="img-fluid" alt="" />
          </div>
          
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="box">
              <span className="advanced">MPP</span>
              <h3>Library Management System</h3>
              <h4>Java</h4>
              <p className="description">Developed an application which manages all functions of a library, including book check-in and check-out, member management, and late fees. Technologies Used: Java, Java Swing.</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <span className="advanced">WAP</span>
              <h3>Simple E-Commerce Application</h3>
              <h4>NodeJS and ExpressJS</h4>
              <p className="description">Implemented a Single-Page Application (SPA) with required login for users to place orders. Includes shopping cart, product verification. Technologies Used: REST API, NodeJS, ExpressJS, HTML, CSS, JavaScript.</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="box">
              <span className="advanced">MWA</span>
              <h3>Delivery Management System</h3>
              <h4>NodeJS and Angular</h4>
              <p className="description">Designed and developed an application to manage goods deliveries, tracking numbers, and automated routes between warehouses. Technologies Used: REST API, NodeJS, ExpressJS, MongoDB, Angular, NgRx, AWS S3, Heroku.</p>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <span className="advanced">WAA</span>
              <h3>Property Management Portal</h3>
              <h4>Java Spring and ReactJS</h4>
              <p className="description">Created a web-based system where house owners and customers may exchange information effectively and inexpensively. System provides a user-friendly interface. Technologies Used: Java, Hibernate, Spring (Boot, Security), ReactJS, PostgreSQL, ECharts</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <div className="box">
              <span className="advanced">BD</span>
              <h3>Spark Project</h3>
              <h4>Spark and Scala</h4>
              <p className="description">Determined the value of a population parameter. Technologies Used: Spark, Scala.</p>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <span className="advanced">BD</span>
              <h3>Hadoop Project</h3>
              <h4>Hadoop and Java</h4>
              <p className="description">Set up a single node cluster in Hadoop 2.x to test programs, calculate wordcount, calculate average computation, and predict events which may happen after a triggering event. Technologies Used: Hadoop, Docker, Java.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}