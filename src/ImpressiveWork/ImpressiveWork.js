import React, { Component } from "react";
import "./ImpressiveWork.css";
import main from "./main.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";

class ImpressiveWork extends Component {
  render() {
    return (
      <div className="ImpressiveWork">
        <div className="container">
          <div className="row frame-headings ">
            <h2>
              Ou<span>r Impressive W</span>ork
            </h2>
            <p>Design A Custom Frame For Photos, Art and more</p>
          </div>
          <div className="row">
            <div className="col-md-6  boxes">
              <img src={main} alt="main" />
            </div>
            <div className="col-md-6 boxes">
              <div className="row">
                <div className="col-md-6 boxes">
                  <img src={one} alt="one" />
                </div>
                <div className="col-md-6 boxes">
                  <img src={two} alt="two" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 boxes">
                  <img src={three} alt="three" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImpressiveWork;
