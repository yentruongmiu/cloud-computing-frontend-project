import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Blog Detail</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Blog Detail</li>
          </ol>
        </div>
      </div>
    </section>
  )
}