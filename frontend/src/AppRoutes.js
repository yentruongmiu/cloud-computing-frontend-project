import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';

import { BlogDetail } from "components/Blog/BlogDetail";
import { Home } from "Home";
import { PageNotFound } from "components/PageNotFound/PageNotFound";

export const AppRoutes = (props) => {
  const location = useLocation();
  const hash = location.hash.split("&access_token");
  const cookies = new Cookies();
  let token = '';
  if (hash) {
    token = hash[0].replace("#id_token=", "");
    let oldToken = cookies.get('token');
    if (token !== oldToken) {
      cookies.set('token', token, { path: '/', maxAge: 3600 });
    } else {
      token = oldToken;
    }
  }

  return (
    <>
      <Routes location={location}>
        <Route exact path="/" element={<Home isAuth={token !== '' ? true : false } />} />
        <Route exact path="/blog-detail" element={<BlogDetail isAuth={token !== '' ? true : false } />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}