import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import WTFrame from "./WhatToFrame/WTFrame";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import ImpressiveWork from "./ImpressiveWork/ImpressiveWork";
import WhyChooseUs from "./WhyChooseUS/WhyChooseUS";
import Client from "./Client/Client";
import OurBlog from "./OurBlog/OurBlog";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section id="App-header">
          <Header />
        </section>
        <section id="WTFrame">
          <WTFrame />
        </section>
        <section id="App-FP">
          <FeatureProduct />
        </section>
        <section id="App-impressiveWork">
          <ImpressiveWork />
        </section>
        <section id="WhyChooseUs">
          <WhyChooseUs />
        </section>
        <section id="App-client">
          <Client /> ]
        </section>
        <section id="App-OurBlog">
          <OurBlog />
        </section>
        <section id="App-footer">
          <Footer />
        </section>
      </div>
    );
  }
}
export default App;
