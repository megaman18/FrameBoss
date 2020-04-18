import React from "react";
import "./OurBlog.css";
import left from "./left.png";
import right from "./right.png";

const OurBlog = () => (
  <div className="OurBlog">
    <div className="container">
      <div className="row frame-headings ">
        <h2>
          <span>Our Blogs</span>
        </h2>
        <p>Design A Custom Frame For Photos, Art and more</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 left-img">
              <img src={left} alt="left-img" />
            </div>
            <div className="col-md-6 left-text">
              <p>Catagory Blog</p>
              <h6>A Very Nice Holiday With Anglina Juliee</h6>
              <p>
                This is dummy text written from no where and using just for text
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 left-img">
              <img src={right} alt="left-img" />
            </div>
            <div className="col-md-6 left-text">
              <p>Catagory Blog</p>
              <h6>A Very Nice Holiday With Anglina Juliee</h6>
              <p>
                This is dummy text written from no where and using just for text
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurBlog;
