import React, { Component } from "react";
import "./Client.css";
import main from "./main.png";

class Client extends Component {
  render() {
    return (
      <div className="Client">
        <div className="container">
          <div className="row frame-headings ">
            <h2>
              We Lo<span>ve our cl</span>ient
            </h2>
            <p>Design A Custom Frame For Photos, Art and more</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={main} alt="main" />
            </div>
            <div className="col-md-8 client-text">
              <h6>JEREMY CROUSE</h6>
              <p>(Graphic Designer)</p>
              <p>
                <i className="fas fa-quote-left"></i> Filler text is text that
                shares some characteristics of a real written text, but is
                random or otherwise generated. It may be used to display a
                sample of fonts, generate text for testing, or to spoof an
                e-mail spam filter
                <i className="fas fa-quote-right"></i>
              </p>
              <p>
                <i className="fas fa-arrow-left"></i> |{" "}
                <i className="fas fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
