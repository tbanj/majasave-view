import React, { Component } from "react";
import axios from "axios";
import env from "../../../env.js";
import Notifier from 'react-notifier-system'
import Footer from "../template/Footer";
import NavbarMobile from "../template/NavbarMobile";
import Navbar from "../template/Navbar";
import Notify from "../Notify.jsx";

const getNotify = new Notify();

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secret_token: "",
      errorClass: 'd-none',
      errorMessage: '',
    };
  }

  handleOnchange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => { });
  };

  handleDoesFormHaveErrors = () => {
    const required = ["secret_token"];
    let emptyFields = 0;

    required.forEach(field => {
      if (this.state[field] === "") {
        ++emptyFields;
      }
    });

    if (emptyFields > 0) { return true; }
    else { return false; }
  };

  handleSubmit = async () => {
    if (this.state.secret_token.trim().length < 1) {
    } else {

      try {
        const detail = { "secret_token": this.state.secret_token.trim() };
        const res = await axios.post(`${env.api}/user/verify`, detail);
        setTimeout(() => {
          this.props.history.push(res.data["url"]);
        }, 500);
        getNotify.successNotification("", res.data["message"]);

      } catch (err) {

        let msg; let title = "Login failed";
        if (err.response.data['message']) {
          msg = err.response.data['message'];
        } else {
          msg = `Check your network and try again `;

        }
        const errorClass = "alert alert-danger";
        this.setState({ error: { errorClass: errorClass, errorMessage: msg } });
        getNotify.warningNotification(msg, title);
      }
    }
  };


  render() {
    console.log(this.props);
    return (
      <div>
        <div className="nav-icon blue-nav-icon _margin-10">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>

        <NavbarMobile />
        <Navbar />
        <header className="header">
          <section className="intro-text">
            <div className="container">
              <div>
                <h1 className="_margin-50 _middle">Verify Your Account</h1>
                <br />
                <div align="center">
                  <div align="left" className="mainactionbutton">
                    <form>
                      {/* <div className={!this.state.error['errorClass'] ? '' : this.state.error['errorClass']}><strong>{this.state.error['errorMessage']}</strong> </div> */}
                      <div className="text-center">
                        <label>
                          <b>Input Token</b>
                        </label>
                      </div>
                      <input
                        type="text"
                        className="inputcontrol"
                        name="secret_token"
                        id="secret_token"
                        onChange={this.handleOnchange}
                        required
                      />
                      <hr className="thhr" />
                      <div className="form-group form-grouplast">
                        <button
                          type="button"
                          className="btn btn-block btn-large btn-success blue wide"
                          id="login"
                          onClick={this.handleSubmit}
                        >
                          Verify Account
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="_margin-20">
                    <a href="/login" className="_margin-20">
                      Back to Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Notifier ref={notifier => (getNotify.notifier = notifier)} />

          </div>
        </header>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Verify;
