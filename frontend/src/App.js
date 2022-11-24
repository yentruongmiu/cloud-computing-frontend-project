import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "components/Footer/Footer";
import { TopBar } from "components/TopBar/TopBar";
import { Header } from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { Contact } from "components/Contact/Contact";


function App() {
  
  return (
    <div className="App">
      <Helmet>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js" type="text/babel"></script>
        <script src="assets/vendor/aos/aos.js" type="text/babel"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/babel" ></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js" type="text/babel"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" type="text/babel"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js" type="text/babel"></script>
        <script src="assets/vendor/waypoints/noframework.waypoints.js" type="text/babel"></script>
        <script src="assets/js/main.js" type="text/babel"></script>
      </Helmet>
      

      <BrowserRouter>
        <TopBar />
        <Header />
        <Hero />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
