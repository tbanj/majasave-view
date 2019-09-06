import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="content">
        <div className="container">
          <ul className="_right foot-links">

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
            <p className="copy">© 2019 Majasave Limited - RC 2515897</p>
          </div>
        </div>
      </footer >
    );
  }
}

export default Footer;
