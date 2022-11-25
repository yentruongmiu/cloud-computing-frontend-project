import React from "react";
import { Link } from "react-router-dom";
import Constants from "Constants";
import neptuneImg from "assets/images/neptune/aws-neptune.png";

export const Blogs = (props) => {
  return(
    <section id="blog" className="portfolio">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Blogs</h2>
          <h3><span>Interested</span> Research</h3>
        </div>

        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="portfolio-item center">
            <img src={neptuneImg} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Graph Database</h4>
              <p>Amazon Neptune</p>
              {/* <a href={neptuneImg} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Amazon Neptune"><i className="bx bx-plus"></i></a> */}
              <Link to="/blog-detail" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}