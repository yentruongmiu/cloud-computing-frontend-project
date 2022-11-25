import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { loadScript } from "Utils";
import Constants from "Constants";

import "./PageNotFound.css";
export const PageNotFound = () => {
  // useEffect(() => {
  //   loadScript(Constants.PUBLIC_URL + "/assets/js/page404.js");
  // }, []);
  const nav = useNavigate();

  const goHome = () => {
    nav("/");
  }
  return (
    <div>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div className="container2">
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
            <div className="cog1">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
          </div>
        </div>
        
        <div className="cog-wheel2"> 
          <div className="cog2">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
          </div>
        </div>
      <h1 className="second-four">4</h1>
        <p className="wrong-para">Uh Oh! Page not found!</p>
      </div>
    </div>
  )
}

