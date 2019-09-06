import React, { Component } from "react";
import "./faq.css";
// import { Collapse } from "react-collapse";
import Navbar from "./template/Navbar";
import NavbarMobile from "./template/NavbarMobile";
import Footer from "./template/Footer";
class Faq extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    btnhover: ""
  };
  handleOnChange = data => {
    const { name, value } = data.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  toggleHover = () => {
    this.setState({ btnhover: !this.state.btnhover });
  };

  render() {
    var linkStyle;
    if (this.state.btnhover) {
      linkStyle = { border: "none", backgroundColor: "#f0f3f5" };
    } else {
      linkStyle = { border: "none", backgroundColor: "#f0f3f5" };
    }
    return (
      <React.Fragment>
        {/* mobile menu icon */}
        <div className="nav-icon blue-nav-icon">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>

        {/* mobile menu icon End   mobile menu */}
        <NavbarMobile />
        {/* mobile menu End Nav */}
        <Navbar />
        {/* Nav End	 */}
        <header className="header">
          <section className="intro-text">
            <div className="container">
              <h1 className="text-center my-5">FAQs </h1>
              <div className="profileuser">
                <div align="center">
                  <div className="card">
                    <div id="accordion">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            style={linkStyle}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Collapsible Group Item #1
                          </button>
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button style={linkStyle}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Collapsible Group Item #2
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button style={linkStyle}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        {/* Header + Nav End */}
        <br />
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Faq;
