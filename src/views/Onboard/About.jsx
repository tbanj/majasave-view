import React, { Component } from "react";
import NavbarMobile from "./template/NavbarMobile";
import Footer from "./template/Footer";
import Navbar from "./template/Navbar";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* mobile menu icon  */}
        <div class="nav-icon blue-nav-icon _margin-10">
          <div class="line1" />
          <div class="line2" />
          <div class="line3" />
        </div>

        <NavbarMobile />
        {/*  Nav */}
        <Navbar />
        <header class="header">
          <section class="intro-text">
            <div class="container">
              <h1 class="_margin-100 _middle">
                Our Mission: Is to avail people the opportunity to manage their
                finances by making it simplest and transparent in saving funds
                for needs .
              </h1>
              <div align="center">
                <img
                  src="sitestatics/img/mission-illustration-700-min.png"
                  class="img-700"
                  alt=""
                />
              </div>
              <p class="_half-width justify _middle">
                Our core team brings together top class talent from the worlds
                of finance, tech and beyond, representing a strong combination
                of proven skills and passion to ensure that everyone can better
                manage their finances.
              </p>
            </div>
          </section>
        </header>

        {/* How It Works */}
        <section class="content">
          <div class="container _center">
            <h1 class="_margin-100">We Are Known For</h1>
            <div class="how-works firstcapspanh3 _margin-50">
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/transparency-min.png" alt="" />
                <h3>
                  <span>T</span>ransparency
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/innovation-min.png" alt="" />
                <h3>
                  <span>C</span>larity
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/integrity-min.png" alt="" />
                <h3>
                  <span>E</span>ase
                </h3>
              </div>
              <div class="_width-25 _padding-20 _flex">
                <img src="sitestatics/img/Efficiency-min.png" alt="" />
                <h3>
                  <span>I</span>nnovation
                </h3>
              </div>
            </div>
            <a href="faq.html" class="btn blue _margin-50">
              Visit FAQs
            </a>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default About;
