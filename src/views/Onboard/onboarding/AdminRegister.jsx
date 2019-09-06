import React, { Component } from 'react';
import './register.css';
import { Link } from "react-router-dom";
import referralList from '../../../api/referral.js';
import Notify from '../Notify.jsx';

import axios from 'axios';
import env from '../../../env.js';
import Notifier from 'react-notifier-system';
import Footer from '../template/Footer';
import NavbarMobile from '../template/NavbarMobile';
import Navbar from '../template/Navbar';

const getNotify = new Notify();
const getReferralItem = new referralList();




class AdminRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: "",
            phone: "",
            position: "",
            admin_key: "",
            password: "",
            audience_from: "",
            first_name: "",
            last_name: "",
            referral_list: [],
            error: {
                fullname: "",
                errorMessage: "",
                errorClass: "alert alert-danger d-none",
            }
        };


        this.handleDoesFormHaveErrors = this.handleDoesFormHaveErrors.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }


    componentWillMount() {
        // this.setState({referral_list: referral});
    }


    async componentDidMount() {
        const referral = await this.handleGetReferral();
        if (getReferralItem.getItemsFromStorage().length > 0 && referral === undefined) {
            this.setState({ referral_list: getReferralItem.getItemsFromStorage() });


        }
        if (referral !== undefined && referral.length > getReferralItem.getItemsFromStorage().length) {
            this.setState({ referral_list: referral });
            getReferralItem.storeItem(this.state.referral_list);

        }

        if (referral !== undefined && referral.length === getReferralItem.getItemsFromStorage().length) {
            this.setState({ referral_list: getReferralItem.getItemsFromStorage() });


        }

    }


    async handleGetReferral() {
        try {
            const res = await axios.get(`${env.api}/misc/get-audiences`);
            const referral_list = res.data.data;
            return referral_list;

        } catch (err) {
            console.log('An error occured');
        }
    }


    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {

            if (this.state.fullname) {
                let name_split = this.state.fullname.split(" ");
                if (name_split.length < 2 || name_split[1].length < 1 || name_split[0].length < 1) {
                    this.setState({ fullname: "", error: { fullname: "your full name is not complete" } });
                    return;
                }
                this.setState({ first_name: name_split[0], last_name: name_split[1], error: { fullname: "" } });
            }

            this.setState({ error: { errorMessage: '' } });
        });

    }

    handleDoesFormHaveErrors() {
        const required = ['fullname', 'phone', 'email', 'password', 'audience_from', 'position', 'admin_key'];
        const minlength = ['password'];
        let emptyFields = 0;
        minlength.forEach(field => {
            let passwordLen = this.state[field];
            if (passwordLen.length < 6)++emptyFields;
        });
        required.forEach(field => {
            if (this.state[field] === '' || this.state.audience_from === 'default') {

                ; ++emptyFields;
            }

        });

        if (emptyFields > 0) { return true; }
        else {
            return false;
        }

    }

    handleSubmitForm = async () => {
        if (this.handleDoesFormHaveErrors()) return;
        // let msg;
        // let title;
        try {
            const detail = {
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "email": this.state.email,
                "password": this.state.password,
                "position": this.state.position,
                "admin_key": this.state.admin_key,
                "audience_from": this.state.audience_from
            }

            const res = await axios.post(`${env.api}/user/admin`, detail);

            setTimeout(() => {
                this.props.history.push(res.data['url']);
            }, 500);
            getNotify.successNotification("", res.data['message']);

        } catch (err) {

            let msg = `Check your network and try again `;
            const title = "Login failed";
            console.log('An error occured', err.response);
            if (err.response !== undefined) {
                msg = err.response.data['message'];
                console.log(err.response.data);
            }
            const errorClass = "alert alert-danger";
            this.setState({ error: { errorClass: errorClass, errorMessage: msg } });
            getNotify.warningNotification(msg, title);
        }
    }


    render() {
        const { referral_list } = this.state;

        return (
            <React.Fragment>
                {/* mobile menu icon */}
                <div className="nav-icon blue-nav-icon _margin-10">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {/* mobile menu icon End   mobile menu*/}
                <NavbarMobile />
                {/* mobile menu End Nav */}
                <Navbar />
                {/* Nav End */}

                <header className="header">
                    <section className="intro-text fornheadertext">
                        <div className="container">
                            <div className="profileuser">

                                <h1 className="_margin-50 _middle boldtext">Create an Admin Account</h1>
                                <div align="center">
                                    <div align="left" className="mainactionbutton my-3">
                                        <form>

                                            <div className={this.state.error['errorClass']}><strong>{this.state.error['errorMessage']}</strong> </div>
                                            <label className="form-label "><b>Full Name (Firstname  Lastname)</b></label>
                                            <input onChange={this.handleOnChange} type="text" className="inputcontrol largetext largetextcenter" name="fullname"
                                                id="fullname" required />
                                            <br />
                                            <span className="text-danger">{this.state.error['fullname']}</span>
                                            <br />
                                            <label className="form-label"><b>Admin Key</b></label>
                                            <input onChange={this.handleOnChange} type="text" className="inputcontrol largetext largetextcenter" name="admin_key"
                                                id="admin_key" placeholder="" required />
                                            <br />
                                            <br />
                                            <label className="form-label "><b>Email</b></label>
                                            <input onChange={this.handleOnChange} type="email" className="inputcontrol largetext largetextcenter"
                                                name="email" id="email" autoComplete="off" required />
                                            <br />
                                            <br />
                                            <label className="form-label "><b>Phone Number</b></label>
                                            <input onChange={this.handleOnChange} type="tel" maxLength="11" name="phone" id="phone" className="inputcontrol largetext largetextcenter"
                                                autoComplete="off" required />
                                            <br />
                                            <br />
                                            <label className="form-label"><b>Password (Input a unique set of letters & number)</b></label>
                                            <input onChange={this.handleOnChange} type="password" maxLength="20" name="password" id="password"
                                                className="inputcontrol largetext largetextcenter" autoComplete="off" required />
                                            <br />
                                            <br />

                                            <label className="form-label"><b>Job Position</b></label>
                                            <input onChange={this.handleOnChange} type="text" className="inputcontrol largetext largetextcenter" name="position"
                                                id="job_position" placeholder="" required />
                                            <br />
                                            <br />
                                            <label className="form-label"><b>How Did You Hear About Us? (Optional)</b></label>
                                            <select className="inputcontrol largetext largetextcenter" onChange={this.handleOnChange} name="audience_from">
                                                <option value="default" >Click To Select</option>
                                                {referral_list.map((data, key) => (<option value={data.val} key={key} >{data.name}</option>))}

                                            </select>

                                            <hr className="thhr" />
                                            <div className="form-group form-grouplast">
                                                <button type="button" disabled={this.handleDoesFormHaveErrors()} onClick={this.handleSubmitForm}
                                                    className="btn btn-block btn-large btn-success blue wide">Create Account for free</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="_margin-20">
                                        <Link to="/signin" className="_margin-20">Already have an Account? Login</Link>
                                    </div>
                                    <span className="_center _margin-20">When you click continue, you agree to Majasave's <Link to="/terms"
                                        target="_blank">Terms of Use</Link> &amp; <Link to="/terms" target="_blank">Privacy</Link>.</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <Notifier ref={notifier => (getNotify.notifier = notifier)} />
                    </div>
                </header>
                {/* Nav End */}
                <br /> <br /><br />
                <Footer />
            </React.Fragment>);
    }
}

export default AdminRegister;