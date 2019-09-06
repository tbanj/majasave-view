import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="content">
        <div className="container">
          <ul className="_right foot-links">
            <h3>COMPANY</h3>
            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/about">Privacy Policy</a>
            </li>
            <li>
              <span className="icon">
                <a href="https://www.facebook.com/aolabanji"  >
                  <i
                    id="social-fb"
                    className="fa fa-facebook-square fa-3x social"
                  />
                </a>
              </span>

              <span className="icon">
                <a href="https://twitter.com/AlabiTemitopeW1" >
                  <i
                    id="social-tw"
                    className="fa fa-twitter-square fa-3x social"
                  />
                </a>
              </span>

              <span className="icon">
                <a
                  href="https://www.linkedin.com/in/alabi-temitope-aa036b103"

                >
                  <i id="social-gp" className="fa fa-linkedin fa-3x social" />
                </a>
              </span>
            </li>
          </ul>

          <ul className="_right foot-links">
            <h3>Quick Links</h3>
            <li>
              <a href="https://github.com/tbanj">AutoSave™</a>
            </li>

            <li>
              <a href="https://github.com/tbanj">Quick Save™</a>
            </li>
            <li>
              <a href="https://github.com/tbanj">SafeLock™</a>
            </li>
            <li>
              <a href="https://github.com/tbanj">Withdrawals</a>
            </li>
            <li>
              <a href="https://github.com/tbanj">Salary Management</a>
            </li>
          </ul>

          <div className="info">
            {/* <a href="#" ></a> */}
            <p className="_margin-10">
              Majasave is the one of the fastest growing online savings &
              investing platform in Nigeria. For over 3 years, our customers
              have saved and invested billions of Naira which have contributed
              to the economy growth.
              <br /> <br />
              Office Address: No. 14, Tokosi Street, Orile Iganmu, Lagos,
              Nigeria.
            </p>
            <p>
              <a href="tel:0700 933 933 933">
                0810 49 146 342 <b>(Mon-Fri from 9am-5pm)</b>
              </a>{" "}
              -
              <a href="https://github.com/tbanj">
                <span
                  className="__cf_email__"
                  data-cfemail="alabiwahab@yahoo.com"
                >
                  [email&#160;protected]
                </span>
              </a>
            </p>
            <p className="copy">© 2016 - 2019 Majasave Limited - RC 2515897</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
