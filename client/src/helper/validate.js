import toast from "react-hot-toast";

export const validateCredentials = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = toast.error("Username or Password Required...");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid Username or Password...");
  }

  if (!values.password) {
    errors.password = toast.error("Password Required");
  } else if (values.password.length < 8) {
    errors.password = toast.error("Password Must be of 8 length");
  } else if (!/[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(values.password)) {
    errors.password = toast.error("Password must contain a special character");
  }
  console.log(errors);
  return errors;
};

export const validateSignupCredidentials = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = toast.error("Name Required");
  } else if (/[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(values.name)) {
    errors.name = toast.error("Name should not contain a special Character");
  }

  if (!values.email) {
    errors.email = toast.error("Email Required");
  }
  if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format.";
  }
};
