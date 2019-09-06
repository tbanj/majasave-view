import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavbarMobile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="mobile-nav">
          <div className="container">
            <ul className="menu">
              <li>
                <span className="products">Products</span>
                <ul className="sub-menu" />
              </li>

              <li>
                <Link id="signup" to="/faq">
                  About
                </Link>
              </li>
              <li>
                <Link id="faq" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="menu-list">
                <Link
                  className="menu-link"
                  to="https://medium.com/@wabilo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link id="login" to="/signin">
                  Login
                </Link>
              </li>
              <li>
                <Link id="create_account" className="signup-btn" to="/signup">
                  Create a Free Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavbarMobile;
