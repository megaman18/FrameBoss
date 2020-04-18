import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-5 nav-logo">
              <h4>FRAMEBOSS</h4>
            </div>
            <div className="col-md-6 nav-list">
              <h6>Services</h6>
              <h6>Flames</h6>
              <h6>Blogs</h6>
              <h6>Contect Us</h6>
            </div>
            <div className="col-md-1 nav-icons">
              <i className="fas fa-user"></i>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
