import React, { Component } from "react";
import "./WhyChooseUs.css";
import main from "./main.png";

class WhyChooseUs extends Component {
  render() {
    return (
      <div className="WhyChooseUs">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <h2>Why Choose Us</h2>
              </div>
              <div className="row">
                <p>
                  Our Clients, are having best experience of having our services
                  and fully satisfied.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 deals-icon">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className="col-md-10">
                      <h5>Free Shipping</h5>
                      <p>We understand Your Needs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 deals-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <div className="col-md-10">
                      <h5>Free Design</h5>
                      <p>We know your choice is best.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 deals-icon">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="col-md-10">
                      <h5>Low Price</h5>
                      <p>We know your low budget but hight quaility</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2 deals-icon">
                      <i className="fas fa-undo-alt"></i>
                    </div>
                    <div className="col-md-10">
                      <h5>Free Return</h5>
                      <p>We are fully responsible for return</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="whychooseusmain">
                <div className="wcs-img">
                  <img src={main} alt="main" />
                </div>
              </div>
            </div>
            <div>
              <button className="custom-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WhyChooseUs;
