import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavbarMobile from '../template/NavbarMobile';
import Navbar from '../template/Navbar';
import Footer from '../template/Footer';
// import './landing.css';
class Landing extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }
  handleOnChange = data => {

    const { name, value } = data.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleKeyRequest = () => {
    console.log('hi');
    this.props.history.push('/admin-register');
  }


  render() {
    return (
      <React.Fragment  >
        <div className="container-fluid" style={{ backgroundColor: 'white' }}>
          <div className="signin-modal">
            <div className="closeslide">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <div className="_half-width _left _padding-50 _no-show">
              <img src="/sitestatics/img/piggy-signin.png" className="signin-img _margin-50" alt="signin" />
              <h1 className="_margin-100">It's time to Save & Invest</h1>
            </div>
            <div className="_right _padding-50 signin">
              <div className="_center">
                <a href="index.html">
                  <img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png"
                    className="logo" alt="Majasave Logo" /></a>
                <h2>Login to your Account</h2>
              </div>
              <form className="_margin-100 signin-form">
                <label htmlFor="email" className="_left">Email or Phone Number</label>
                <input onChange={this.handleOnChange} type="text" name="email" className="_left _margin-10" />
                <label htmlFor="password" className="_margin-20 _left">Password</label>
                <input onChange={this.handleOnChange} type="password" name="password" className="_left _margin-10" />
                <div className="clearboth"></div>
                <div className="actionholder">
                  <input onChange={this.handleOnChange} type="submit" className="btn _margin-20" value="Log In" />

                  <div className="_margin-20">
                    <a href="onboarding/register.html" className="_margin-20">Create an Account Instead</a> <br />
                    <a href="forgot.html" className="_margin-20">Forgot Password?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* mobile menu icon */}
          <div className="nav-icon nav-icon _margin-10">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          {/* mobile menu icon End mobile menu */}
        </div>
        <NavbarMobile />
        {/* mobile menu End Nav */}

        <Navbar />


        <header className="main-header">
          <section className="intro-text _margin-100">
            <div className="container mainheroholder">
              <div className="_mobilecenter">
                <h1 className="_half-width _margin-50 bluecolor bold">Save & Invest at the same time</h1>
                <p className="_half-width _margin-20 ashcolor">Majasave is your guide to financial breathrough. With personalize saving & investment plan .<br /><br />Which will avail you opportunity to earn upto 11% interests on savings.<br />and upto 20% when you signup for an investment plan.</p>

                <div>
                  <Link to="/signup" className="btn btn-rounded btn-primary ">Create a Free Account</Link>
                  {/* <Link to="/admin-register" onClick={this.handleKeyRequest} className="btn btn-rounded btn-success m-3">Create an Admin Account</Link> */}
                  <button className="btn btn-rounded btn-success m-3"> Create an Admin Account</button>
                </div>

                <div>
                  <a href="" >
                    <img src="/images/iosbadge-101-image.png" className="download app_store_badges" alt="" />
                  </a>
                  <a href="" >
                    <img src="/images/google-play-badge.png" className="download app_store_badges" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </header>


        <section className="content grayback">
          <div className="container _center securealertbox">
            <div className="imagepart"><img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/security-login-400-min.png"
              alt="" /></div>
            <div className="textpart">
              <div className="textheader bluecolor bold">Your Security is our Priority</div>
              <div className="textinfo ashcolor">Majasave uses the highest levels of Internet Security, and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container _center">
            <h1 className="_margin-100 bold">Save smartly & responsibly!</h1>
            <div className="_subtitle">Majasave helps you reach your savings target much faster with various savings types. Plus you can even team up with others to reach joint goals.</div>
            <div className="how-works howtostart _margin-50">
              <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                <img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png" alt="" />
                <h3 className="bluecolor bold">Enjoy quarterly savings</h3>
                <p>Join over 100,000 users that use our quarterly savings feature called "PiggyBank" to reach their general/personal savings goals more quickly.</p>
              </div>
              <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                <img src="/../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png" alt="" />
                <h3 className="bluecolor bold">Reach multiple targets</h3>
                <p>Set and reach multiple saving goals you set using our "Target Savings" feature, you can save for holidays, fees or even special events.</p>
              </div>
              <div className="_width-33 _padding-20 _flex _outfeature_box savingsfeature">
                <img src="/../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png" alt="" />
                <h3 className="bluecolor bold">Lock funds away</h3>
                <p>Use our "SafeLock" feature to lock funds away so you don't have access until your set date. You also earn over 13% p.a.</p>
              </div>
            </div>

          </div>
        </section>


        <section className="content investcontent">
          <div className="container _center">
            <h1 className="_margin-100 bold">Invest in bits & on the go!</h1>
            <div className="_subtitle">Many investments are expensive, which makes it hard to get started. At Majasave, you too can invest in tiny & affordable chunks and still enjoy the same return rates in amazing opportunities.</div>
            <div className="how-works howtostart _margin-50">
              <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                <img src="/../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-4.png" alt="" />
                <h3 className="bluecolor bold">Co-invest in opportunities</h3>
                <p>Join other Majasave users to co-invest in guaranteed fixed income investments & other amazing projects.</p>
              </div>
              <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                <img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-5.png" alt="" />
                <h3 className="bluecolor bold">Decide on what to invest</h3>
                <p>You have complete control on the type of investments you want to engage. All opportunities are pre-vetted by Majasave.</p>
              </div>
              <div className="_width-33 _padding-20 _flex _outfeature_box investfeature">
                <img src="/../storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-6.png" alt="" />
                <h3 className="bluecolor bold">Watch your portfolio grow</h3>
                <p>Easily monitor the progress of your investments from your Majasave dashboard.</p>
              </div>
            </div>

          </div>
        </section>







        <Footer />
      </React.Fragment>);
  }
}

export default Landing;