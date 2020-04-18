import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="Footer">
    <div className="container footer-container">
      <div className="row">
        <div className="col-md-2">
          <p>
            Get the app <i className="fab fa-apple" />
          </p>
          <p>Follow Us</p>
          <div className="footer-social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p>Get Inspiration</p>
          <form className="footer-form">
            <input placeholder="Email" type="text" name="footer-input" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-2 footer-list">
              <ul>
                <li>How it work</li>
                <li>Press</li>
                <li>How to frame</li>
                <li>The Shop</li>
              </ul>
            </div>
            <div className="col-md-2 footer-list">
              <ul>
                <li>FAQ</li>
                <li>For Business</li>
                <li>Company</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-2 footer-list">
              <ul>
                <li>Stroies</li>
                <li>Pricing </li>
                <li>Reviews</li>
                <li>Design Services</li>
              </ul>
            </div>
            <div className="col-md-2 footer-list">
              <ul>
                <li>Privacy</li>
                <li>Terms Of Services</li>
                <li>Secutiry</li>
                <li>Best of us</li>
              </ul>
            </div>
            <div className="col-md-2 footer-list">
              <ul>
                <li>About Us</li>
                <li>Gift Card</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <h6> &copy;FRAMEBOSS 2020 </h6>
    </div>
  </div>
);

export default Footer;
