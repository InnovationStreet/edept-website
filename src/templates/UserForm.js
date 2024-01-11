import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField/InputField";
import Select from "../components/Select/Select";
import Checkbox from "../components/Checkbox/Checkbox";
import Swal from "sweetalert2";
import { Route, Routes, useNavigate } from "react-router-dom";

function UserForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    agree: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    mobile: Yup.string()
      .required("Mobile is required")
      .min(10, "Invalid mobile number")
      .max(10, "Invalid mobile number"),
    city: Yup.string().required("City is required"),
    course: Yup.string().required("Course is required"),
    dob: Yup.string().required("Date of birth is required"),
    agree: Yup.bool().oneOf([true], "You must agree to register"),
  });
  let affiliate = "";
  const href = window.location.href;
  if (href.includes("onlinecu3272")) {
    console.log("affilate", "onlinecu3272");
    affiliate = "3272";
  } else if (href.includes("onlinecu3958")) {
    console.log("affilate", "onlinecu3958");
    affiliate = "3958";
  } else if (href.includes("onlinecu3961")) {
    console.log("affilate", "onlinecu3961");
    affiliate = "3961";
  }
  return (
    <div className="container">
      <div className="register-form-container" id="div_regform">
        <h3 className="mb-3">Sign up for a free career counselling session!</h3>
        <div className="register-form">
          {
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("values", values);
                const data = {
                  name: values.name,
                  email: values.email,
                  phone: values.mobile,
                  city: values.city,
                  program: values.course,
                  dob: values.dob,
                  affiliate 
                };
                console.log("data", data);
                fetch("https://onlinecu.edept.co/send-mail.php", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((res) => res.json)
                  .then((result) => {
                    console.log(result);
                    navigate("/success", { replace: true });
                    // Swal.fire({
                    //   icon: "success",
                    //   title: "Success!",
                    //   text: "Registration successful.",
                    //   showConfirmButton: false,
                    //   showCloseButton: true,
                    // });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-6 gap-4 md:gap-10 mt-8"
                >
                  <InputField
                    name="name"
                    label="Name"
                    placeholder="Full Name"
                    value={values.name}
                    error={formSubmitted ? errors.name : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <InputField
                    name="email"
                    label="Email"
                    placeholder="Email Address"
                    type="text"
                    value={values.email}
                    error={formSubmitted ? errors.email : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <InputField
                    name="mobile"
                    label="Number"
                    placeholder="Mobile Number"
                    type="number"
                    value={values.mobile}
                    error={formSubmitted ? errors.mobile : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <InputField
                    name="city"
                    label="City"
                    placeholder="Enter Your City"
                    value={values.city}
                    error={formSubmitted ? errors.city : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    className="col-span-6 md:col-span-2"
                  />
                  <Select
                    name="course"
                    label="Course"
                    placeholder="Course"
                    value={values.course}
                    error={formSubmitted ? errors.course : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <InputField
                    name="dob"
                    label="Date of birth"
                    placeholder="Date of birth"
                    value={values.dob}
                    error={formSubmitted ? errors.dob : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    type="date"
                  />
                  <Checkbox
                    name="agree"
                    value={values.agree}
                    checked={values.agree}
                    error={formSubmitted ? errors.agree : ""}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />

                  <div className="col-span-6 flex justify-center">
                    <button
                      type="submit"
                      onClick={() => setFormSubmitted(true)}
                      className="btn btn-primary mb-0 w-100 mt-2"
                    >
                      Register Now
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          }
        </div>
      </div>
    </div>
  );
}

export default UserForm;
