import { useFormik } from "formik";
import React from "react";
import { validateLoginCredentials } from "../helper/validate";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateLoginCredentials,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div>
        <form action="#" onSubmit={formik.handleSubmit} className="form">
          <h1>Sign In</h1>
          <input
            type="email"
            {...formik.getFieldProps("username")}
            placeholder="Eamil ID"
          />
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Password"
          />
          <div className="recover">Forgot Password?</div>
          <button>Log In</button>
          <div className="member">Not a member? Register here</div>
        </form>
      </div>
    </>
  );
};

export default Login;
