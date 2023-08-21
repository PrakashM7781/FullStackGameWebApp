import React, { useState } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import "./style/formStyle.css";
import {
  validateCredentials,
  validateSignupCredidentials,
} from "../helper/validate";

const Signup = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const usernameParam = queryParams.get("username");
  const passwordParam = queryParams.get("password");
  const nameParam = queryParams.get("name");
  const emailParam = queryParams.get("email");
  const dobParams = queryParams.get("dob");
  const passwordsignupParam = queryParams.get("passwordSignup");
  const cnfpasswordSignupParams = queryParams.get("cnfpasswordSignup");

  const formikSignin = useFormik({
    initialValues: {
      username: usernameParam || "",
      password: passwordParam || "",
    },
    onSubmit: async (values) => {
      const errors = validateCredentials(values);

      if (Object.keys(errors).length === 0) {
        console.log(values);
        const loginSuccessful = true;

        if (loginSuccessful) {
          toast.success("Login successful!");
        } else {
          toast.error("Login failed!");
        }
      } else {
        Object.values(errors).forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      }
    },
  });

  const formikSignup = useFormik({
    initialValues: {
      name: nameParam || "",
      email: emailParam || "",
      dob: dobParams || "",
      passwordSignup: passwordsignupParam || "",
      cnfpasswordSignup: cnfpasswordSignupParams || "",
    },
    onSubmit: async (values) => {
      const errors = validateSignupCredidentials(values);

      if (Object.keys(errors).length === 0) {
        console.log(values);
        const loginSuccessful = true;

        if (loginSuccessful) {
          toast.success("SignUp successful!");
        } else {
          toast.error("SignUp failed!");
        }
      } else {
        Object.values(errors).forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      }
    },
  });

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={formikSignin.handleSubmit}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  {...formikSignin.getFieldProps("username")}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  {...formikSignin.getFieldProps("password")}
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form
              action="#"
              className="sign-up-form"
              onSubmit={formikSignup.handleSubmit}
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  {...formikSignup.getFieldProps("name")}
                />
              </div>
              <div className="input-field">
                <i className="fa fa-birthday-cake"></i>
                <input type="date" {...formikSignup.getFieldProps("dob")} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  {...formikSignin.getFieldProps("email")}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  {...formikSignup.getFieldProps("passwordSignup")}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...formikSignup.getFieldProps("cnfpasswordSignup")}
                />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Sign up to enjoy our services.</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Login in to view your profile.</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
