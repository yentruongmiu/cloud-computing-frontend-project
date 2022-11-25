import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { ArrowUp } from "components/ArrowUp/ArrowUp";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { TopBar } from "components/TopBar/TopBar";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { AWSNaptune } from "./AWSNaptune";


export const BlogDetail = (props) => {
  
  return (
    <div>
      <Helmet>
        <title>YenTruong - Blog detail page</title>
      </Helmet>

      <TopBar />
      <Header active="blog"/>
      
      <main id="main">
        <Breadcrumbs />
        <AWSNaptune />
      </main>

      <Footer />
      <ArrowUp />
    </div>
  )
}