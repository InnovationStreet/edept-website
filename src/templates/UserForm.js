import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../components/InputField/InputField";
import Select from "../components/Select/Select";
import Checkbox from "../components/Checkbox/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { getAffiliate } from "../utils/Affilitate";

function UserForm() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const utmvendor = search.get("utmvendor") || "";
  const utmpublisher = search.get("utmpublisher") || "";
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formOk, setFormOk] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "",
    dob: "",
    agree: false,
    recaptcha: "",
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
    recaptcha: Yup.string().required("reCAPTCHA is required"),
  });

  const href = window.location.href;
  let affiliate = getAffiliate(href);

  return (
    <div className="container">
      <div className="register-form-container" id="div_regform">
        <h3 className="mb-3">Sign up for a free career counselling session!</h3>
        <div className="register-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values, "values area consoled")
              setFormOk(true);
              const data = {
                name: values.name,
                email: values.email,
                phone: values.mobile,
                city: values.city,
                program: values.course,
                dob: values.dob,
                affiliate,
                utmvendor,
                utmpublisher,
              };

             (fetch("https://edept.co/apps/apis/admin-apis.php", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((res) => res.json())
                .then((result2) => {
                  navigate("/success", {
                    replace: true,
                    state: { utmvendor, utmpublisher },
                  });
                })
                .catch((error) => {
                  console.log(error);
                  navigate("/success", {
                    replace: true,
                    state: { utmvendor, utmpublisher },
                  });
                }))

              // Reset the form after submission
              resetForm();
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

                {/* Add reCAPTCHA */}
                <div className="col-span-6">
                  <ReCAPTCHA
                  
                    sitekey="6LdKj2spAAAAAGADoT6ulczxYf3ARW7uzxaA4jmY"
                    name="recaptcha"
                    onChange={(value) =>
                      handleChange({ target: { name: "recaptcha", value } })
                    }
                  />
                  {formSubmitted && errors.recaptcha && (
                    <div className="text-danger captcha-error">{errors.recaptcha}</div>
                  )}
                </div>

                <div className="col-span-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={formOk}
                    onClick={() => setFormSubmitted(true)}
                    className="btn btn-primary mb-0 w-100 mt-2"
                  >
                    Register Now
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
