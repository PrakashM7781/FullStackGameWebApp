import React from "react";
import { useFormik } from "formik";
// import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import toast from "react-hot-toast";
import "./style/formStyle.css";
import { Link } from "react-router-dom";
import { validateCredentials } from "../helper/validate";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: validateCredentials,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form action="#" onSubmit={formik.handleSubmit} className="form">
        <h1>Sign Up</h1>
        <input
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
        />
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Name"
        />
        <input
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email ID"
        />
        <input
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
        />
        <input
          type="password"
          {...formik.getFieldProps("cpassword")}
          placeholder="Re-Enter Password"
        />

        <div className="terms">
          <input type="checkbox" id="checkbox" required={true} />
          <label for="checkbox">I agree to these Terms & Conditions</label>
        </div>
        <button>Sign Up</button>
        <div className="member">
          Already a member? <Link to="/login">Login here</Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
