import React, { Component } from "react";
import "./header.css";
import header from "./header.png";
// eslint-disable-next-line

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Header-img">
                <img className="img-responsive" src={header} alt="header-img" />
              </div>
              <div className="img-ribbons"></div>
            </div>
            <div className="col-md-6 text-box">
              <h1>A NEW APPROACH TO CUSTOM FAME</h1>
              <div className="row">
                <div className="col-md-12 Header-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                  </p>

                  <a href="#">START FRAMING</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
