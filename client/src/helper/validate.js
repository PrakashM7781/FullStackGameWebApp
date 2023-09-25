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

  if (values.password !== values.cpassword) {
    errors.password = toast.error("Password does not match...");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    errors.email = toast.error("Email Required...");
  } else if (!values.email.match(emailRegex)) {
    errors.email = toast.error("Invalid email...");
  }

  if (!values.name) {
    errors.name = toast.error("Name Required...");
  } else if (values.name.match(emailRegex)) {
    errors.name = toast.error("Invalid name...");
  }
  return errors;
};

export const validateLoginCredentials = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = toast.error("Username Required..");
  }

  if (!values.password) {
    errors.password = toast.error("Password Required...");
  }
};

// export const validateSignupCredidentials = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = toast.error("Name Required");
//   } else if (/[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(values.name)) {
//     errors.name = toast.error("Name should not contain a special Character");
//   }

//   if (!values.email) {
//     errors.email = toast.error("Email Required");
//   }
//   if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email format.";
//   }
// };
