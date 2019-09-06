import React, { Component } from "react";
import Footer from "./template/Footer";
import Navbar from "./template/Navbar";
import NavbarMobile from "./template/NavbarMobile";
class Forgot extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="signin-modal">
          <div class="closeslide">
            <div class="line1" />
            <div class="line2" />
          </div>
          <div class="_half-width _left _padding-50 _no-show">
            <img
              src="sitestatics/img/piggy-signin.png"
              class="signin-img _margin-50"
              alt=""
            />
            <h1 class="_margin-100">It's time to Save & Invest</h1>
          </div>
          <div class="_right _padding-50 signin">
            <div class="_center">
              <a href="index.html">
                <img
                  src="/../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png"
                  class="logo"
                  alt="Majasave Logo"
                />
              </a>
              <h2>Login to your Account</h2>
            </div>
            <form class="_margin-100 signin-form">
              <label for="email" class="_left">
                Email or Phone Number
              </label>
              <input
                type="email"
                name="email"
                value=""
                class="_left _margin-10"
              />
              <label for="password" class="_margin-20 _left">
                Password
              </label>
              <input type="password" name="password" class="_left _margin-10" />
              <div class="clearboth" />
              <div class="actionholder">
                <input type="hidden" name="loginacc" value="1" />

                <div class="_margin-20">
                  <a href="onboarding/register.html" class="_margin-20">
                    Create an Account Instead
                  </a>{" "}
                  <br />
                  <a href="forgot.html" class="_margin-20">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="nav-icon blue-nav-icon _margin-10">
          <div class="line1" />
          <div class="line2" />
          <div class="line3" />
        </div>

        <NavbarMobile />
        <Navbar />
        <header class="header">
          <section class="intro-text _margin-100">
            <div class="container">
              <div class="profileuser">
                <h1 class="_margin-50 _middle">Reset Password</h1>
                <p class="_margin-20 _margin-b-20 _middle">
                  Enter your email address below for instructions.
                </p>
                <div align="center">
                  <div align="left" class="mainactionbutton">
                    <form action="#" method="post" id="">
                      <label class="form-label leftlabel">
                        <b>Enter your Majasave Email</b>
                      </label>
                      <input
                        type="text"
                        class="inputcontrol largetext largetextcenter"
                        name="email"
                        id="email"
                        value=""
                        autocomplete="off"
                        required=""
                      />
                      <hr class="thhr" />
                      <div class="form-group form-grouplast">
                        <button
                          type="submit"
                          class="btn btn-block btn-large btn-success blue wide"
                          id="login"
                        >
                          Send Instruction
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="_margin-20">
                    <a href="login.html" class="_margin-20">
                      Back to Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Forgot;
