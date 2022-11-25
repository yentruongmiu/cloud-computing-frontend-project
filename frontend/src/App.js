import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { loadScript } from "Utils";
import Constants from "Constants";

import { AppRoutes } from "AppRoutes";

function App() {
  useEffect(() => {
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/purecounter/purecounter_vanilla.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/aos/aos.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/bootstrap/bootstrap.bundle.min.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/glightbox/glightbox.min.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/isotope-layout/isotope.pkgd.min.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/swiper/swiper-bundle.min.js");
    loadScript(Constants.PUBLIC_URL + "/assets/vendor/waypoints/noframework.waypoints.js");
    loadScript(Constants.PUBLIC_URL + "/assets/js/main.js");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
