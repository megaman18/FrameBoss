import React, { Component } from "react";
import "./FeatureProduct.css";
import main from "./main.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";

class FeatureProduct extends Component {
  render() {
    return (
      <div className="FP">
        <div className="container">
          <div className="row FP-headings">
            <h2>
              Fea<span>ture Prod</span>ucts
            </h2>
            <p>Design A Custom Frame For Photos, Art and more</p>
          </div>
          <div className="row FP-gallery">
            <div className="col-md-4">
              <img className="img-responsive" src={main} alt="main-img" />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <img src={one} alt="one" />
                </div>
                <div className="col-md-4">
                  <img src={two} alt="one" />
                </div>
                <div className="col-md-4">
                  <img src={three} alt="one" />
                </div>
                <div className="col-md-4">
                  <img src={four} alt="one" />
                </div>
                <div className="col-md-4">
                  <img src={five} alt="one" />
                </div>
                <div className="col-md-4">
                  <img src={six} alt="one" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeatureProduct;
