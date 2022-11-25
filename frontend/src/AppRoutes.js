import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { BlogDetail } from "components/Blog/BlogDetail";
import { Home } from "Home";
import { PageNotFound } from "components/PageNotFound/PageNotFound";

export const AppRoutes = (props) => {
  const location = useLocation();
  return (
    <>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog-detail" element={<BlogDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}