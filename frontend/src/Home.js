import React from "react";
import { Helmet } from "react-helmet";

import { Hero } from "components/Hero/Hero";
import { About } from "components/About/About";
import { Portfolio } from "components/Portfolio/Portfolio";
import { Skill } from "components/Skill/Skill";
import { Education } from "components/Education/Education";
import { Blogs } from "components/Blog/Blogs";
import { Contact } from "components/Contact/Contact";
import { TopBar } from "components/TopBar/TopBar";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { ArrowUp } from "components/ArrowUp/ArrowUp";

export const Home = (props) => {
  const isAuth = props.isAuth;

  return (
    <>
      <Helmet>
        <title>YenTruong - Home page</title>
      </Helmet>

      <TopBar />
      <Header isAuth={isAuth} />
      <Hero />

      <main id="main">
        <About />
        <Portfolio />
        <Skill />
        <Education />
        <Blogs />
        <Contact isAuth={isAuth} />
      </main>
      <Footer />
      <ArrowUp />
    </>
  )
}