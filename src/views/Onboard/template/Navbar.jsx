import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="top-nav  alt-nav navwhite">
        <div className="container">
          <ul className="menu _no-show">
            <li className="menu-list">
              <Link id="about" className="menu-link" to="/about">
                About
              </Link>
            </li>
            <li className="menu-list">
              <Link className="menu-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="menu-list">
              <a
                className="menu-link"
                href="https://medium.com/@wabilo"
                target="_blank"
                rel="noopener noreferrer"
              >
                BLOG
              </a>
            </li>
            <li className="menu-list">
              <Link className="menu-link" to="/signin">
                Log In
              </Link>
            </li>
            <li className="menu-list">
              <Link className="menu-link signup-btn" to="/signup">
                Create a Free Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
