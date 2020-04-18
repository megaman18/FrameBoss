import React, { Component } from "react";
import "./WTFrame.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";

class WTFrame extends Component {
  render() {
    return (
      <div className="WTFrame">
        <div className="container">
          <div className="row frame-headings">
            <h2>
              What A<span>re You</span> Framing?
            </h2>
            <p>Design A Custom Frame For Photos, Art and more</p>
          </div>
          <div className="row">
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={one} alt="img" />
            </div>
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={two} alt="img" />
            </div>
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={three} alt="img" />
            </div>
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={four} alt="img" />
            </div>
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={five} alt="img" />
            </div>
            <div className="col-md-2 img-box">
              <img className="img-responsive" src={six} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WTFrame;
