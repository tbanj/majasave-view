import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import env from "../../env.js";
import Notifier from 'react-notifier-system'
// import swal from 'sweetalert';
import NavbarMobile from './template/NavbarMobile';
import SweetAlert from 'react-bootstrap-sweetalert'
import Footer from './template/Footer';
import Navbar from './template/Navbar';
import Notify from "./Notify.jsx";
// import './pluggins/SweetAlert.js';
// import Sweetalert from './pluggins/SweetAlert.js';

// const getSweetAlert = new Sweetalert();
let setClick = false;

const getNotify = new Notify();
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {

			email: "",
			password: "",
			alert: null,
			error: {
				errorMessage: "",
				errorClass: "alert alert-danger d-none",
			},
			submit_spinner: "fa fa-circle-o-notch fa-spin d-none",
		}

		// if (localStorage.getItem('majasave-token')) {
		// 	this.props.history.push('/dashboard');
		// }
	}


	handleOnChange = (data) => {
		const { name, value } = data.target;
		this.setState({ [name]: value });
		this.setState({ error: { errorMessage: '' } });
	}

	hideAlert = () => {
		this.setState({
			alert: null
		});
	}

	handleDoesFormHaveErrors = () => {
		const required = ['email', 'password'];
		let emptyFields = 0;

		required.forEach(field => {
			if (this.state[field].length < 1 || this.state.password.length < 6) { ++emptyFields; }
		});

		if (emptyFields > 0) {
			return true;
		}
		else {
			return false;
		}
	}


	handleApiRequest = async () => {

		this.setState({ alert: null, submit_spinner: "fa fa-circle-o-notch fa-spin" })
		try {
			const body = {
				"email": this.state.email,
				"password": this.state.password
			}

			const res = await axios.post(`${env.api}/user/signin`, body);
			console.log(res.data['message']);
			setTimeout(() => {
				this.props.history.push(res.data["url"]);
			}, 500);

			getNotify.successNotification("", res.data["message"]);
			const token = res.data.data.token;

			localStorage.setItem('majasave-token', token);




		} catch (err) {

			let msg = `Check your network and try again `;
			const title = "Login failed";
			console.log('An error occured');
			if (err.response !== undefined) {
				msg = err.response.data['message'];
				console.log(err.response.data);
			}
			const errorClass = "alert alert-danger";
			this.setState({ error: { errorClass: errorClass, errorMessage: msg } });

			getNotify.errorNotification(msg, title);
		}





	}

	handleSubmitForm(e) {
		const getAlert = (e) => (
			<SweetAlert
				warning
				showCancel
				confirmBtnText="Yes!"
				closeOnClickOutside={setClick}
				confirmBtnBsStyle="danger"
				cancelBtnBsStyle="default"
				title="Are you sure your login details are correct"
				onConfirm={(e) => this.handleApiRequest(e)}
				onCancel={(e) => this.onCancelDelete(e)}
			>
				{/* You will not be able to recover this project! */}
			</SweetAlert>
		);
		this.setState({
			alert: getAlert()
		});

		e.preventDefault();
	}

	onCancelDelete(e) {
		this.setState({
			alert: null
		});
	}

	deleteFile(e) {
		alert("confirm")
	}

	render() {
		return (
			<React.Fragment>
				<div className="signin-modal">
					<div className="closeslide">
						<div className="line1"></div>
						<div className="line2"></div>
					</div>


				</div>
				{/* mobile menu icon */}
				<div className="nav-icon blue-nav-icon _margin-10">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>

				{/* mobile menu icon End   mobile menu */}
				<NavbarMobile />
				{/* mobile menu End Nav */}
				<Navbar />
				{/* Nav End	 */}
				<header className="header">
					<section className="intro-text">
						<div className="container">
							<div className="profileuser">
								<h1 className="_margin-50 _middle">Secure Login</h1>
								<p className="_margin-20 _margin-b-20 _middle"> Save & Invest today and read bountifully thereafter</p>
								<div align="center">
									<div align="left" className="mainactionbutton">
										<form >
											<div className={this.state.error['errorClass']}><strong>{this.state.error['errorMessage']}</strong> </div>

											<label className="form-label leftlabel"><b>Email</b></label>
											<input onChange={this.handleOnChange} type="email" className="inputcontrol largetext largetextcenter"
												name="email" id="email" autoComplete="off" required="" />
											<br />
											<br />
											<label className="form-label leftlabel"><b>Password</b></label>
											<input onChange={this.handleOnChange} type="password" className="inputcontrol largetext largetextcenter" name="password"
												id="password" required="" />
											<hr className="thhr" />
											<div className="form-group ">


												<button type="button" disabled={this.handleDoesFormHaveErrors()} onClick={(e) => this.handleSubmitForm(e)}
													className="btn btn-block btn-large btn-success blue wide"><i className={this.state.submit_spinner}></i> Login</button>{this.state.alert}


											</div>
										</form>
									</div>
									<div className="_margin-20">
										<Link to="/signup" className="_margin-20">Create an Account Instead</Link> <br />
										<Link to="/forgot-password" className="_margin-20">Forgot Password?</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div>
						<Notifier ref={notifier => (getNotify.notifier = notifier)} />
						{/* <SweetAlert title="Here's a message!" onConfirm={this.hideAlert} /> */}
					</div>
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

export default Login;