import React, { Component } from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const AdminLogin = React.lazy(() => import("./views/Pages/Login"));
const AdminRegister = React.lazy(() => import("./views/Onboard/onboarding/AdminRegister.jsx"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const UserLanding = React.lazy(() =>
  import("./views/Onboard/landing/Landing.jsx")
);
const Terms = React.lazy(() => import("./views/Onboard/Terms.jsx"));
const UserVerify = React.lazy(() =>
  import("./views/Onboard/onboarding/Verify.jsx")
);
const Login = React.lazy(() => import("./views/Onboard/Login.jsx"));
const ForgetPassword = React.lazy(() => import("./views/Onboard/Forgot.jsx"));
const Faq = React.lazy(() => import("./views/Onboard/Faq.jsx"));
const About = React.lazy(() => import("./views/Onboard/About.jsx"));
const Register = React.lazy(() =>
  import("./views/Onboard/onboarding/Register.jsx")
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home"
              render={props => <UserLanding {...props} />}
            />
            <Route
              exact
              path="/admin-register"
              name="Admin Register Page"
              render={props => <AdminRegister {...props} />}
            />

            <Route
              exact
              path="/admin-login"
              name="Admin Login  Page"
              render={props => <AdminLogin {...props} />}
            />

            <Route
              exact
              path="/signup"
              name="Register Page"
              render={props => <Register {...props} />}
            />

            <Route
              exact
              path="/signin"
              name="Login Page"
              render={props => <Login {...props} />}
            />

            <Route
              exact
              path="/forget-password"
              name="Forget Password Page"
              render={props => <ForgetPassword {...props} />}
            />

            <Route
              exact
              path="/terms"
              name="Terms Page"
              render={props => <Terms {...props} />}
            />

            <Route
              exact
              path="/faq"
              name="Faq Page"
              render={props => <Faq {...props} />}
            />

            <Route
              exact
              path="/about"
              name="About Page"
              render={props => <About {...props} />}
            />

            <Route
              exact
              path="/user/verify"
              name="Verify Page"
              render={props => <UserVerify {...props} />}
            />

            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => <Page500 {...props} />}
            />
            <Route
              path="/dashboard"
              name="Home"
              render={props => <DefaultLayout {...props} />}
            />
            <Route
              path="/users"
              name="Users"
              render={props => <DefaultLayout {...props} />}
            />

            {/* <Route
              path="/base/list-groups"
              name="List Groups"
              render={props => <DefaultLayout {...props} />}
            /> */}
            <Route
              path="/base/navbars"
              name="Navbars"
              render={props => <DefaultLayout {...props} />}
            />
            <Route
              path="/base/navs"
              name="Navs"
              render={props => <DefaultLayout {...props} />}
            />
            <Route
              path="/users/:id"
              name="User Details"
              render={props => <DefaultLayout {...props} />}
            />

            <Redirect to="/" />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
