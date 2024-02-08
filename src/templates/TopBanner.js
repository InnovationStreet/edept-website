import "../App.css";
import axios from "axios";
import React, { useState } from "react";
import UserForm from "./UserForm";

function TopBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    e.preventDefault();
    const newErrors = {};
    // Simple validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else{
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(formData.email.trim())) {
        newErrors.email = "Email is invalid";
      }
    }
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else{
      const mobile = formData.mobile.trim();
      if (mobile.length!==10 || !mobile.match('[0-9]')) {
        newErrors.mobile = "Mobile number is invalid";
      }
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
      newErrors.dob = "Date of birth is required";
    }
    if (!formData.agree) newErrors.agree = "You must agree to register";
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // Simple validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
      newErrors.dob = "Date of birth is required";
    }
    if (!formData.agree) newErrors.agree = "You must agree to register";

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions
      console.log("Form submitted:", formData);

      try {
        console.log(formData);
        const response = axios
          .post("https://onlinecu.edept.co/send-mail.php", {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            city: formData.city,
            program: formData.course,
            dob: formData.dobMonth + "/" + formData.dobDay + "/" + formData.dobYear,
          })
          .then((res) => {
            alert("Registration successful");
            setFormData({
              name: "",
              email: "",
              mobile: "",
              city: "",
              course: "",
              dobDay: "",
              dobMonth: "",
              dobYear: "",
              agree: false,
            });
          });

        const data = await response.json();
        console.log("Response from PHP backend:", data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="hero-banner position-relative" id="home">



      <div
        // top-0 -> top-1 align section at bottom
        className="banner-overlay position-absolute top-1 pb-4 start-0 end-0 pt-3"
        style={{ zIndex: 1 }}
      >
        <div className="container">
          <div
            className="signUp-form bg-white border-bottom shadow-sm p-4 border-radius ms-auto"
            id="signup"
          >
           <UserForm></UserForm>

            <p className="m-0 d-none">
              I hereby accept and agree to upGrad's terms and conditions and
              privacy policy and authorize upGrad Education Private Limited ,
              its authorized representatives and affiliates to connect with me
              via calls/SMS/ emails, in connection with the courses and programs
              offered by upGrad, irrespective of my being registered with the
              National Do Not Call Registry, which I agree to de-register from,
              if required.
            </p>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide h-100"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
          />
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to={1} />
        </ol>
        <div className="carousel-inner h-100">
          <div
            className="carousel-item active sliderImg slider-img h-100"
            data-bs-interval={5000}
          >
            {/*
                        <picture>
                          <source type="image/webp" srcset="img/banner.webp">
                          <source type="image/jpeg" srcset="img/banner.jpg">
                          <img src="img/banner.jpg" alt="">
                        </picture>
                        */}
            <div className="container h-100 position-relative d-flex align-items-center">
              <div className="banner-content">
                <h2 class="mb-3">
                  Navigate your way towards a brighter future
                </h2>
                <p class="mb-4">
                  Industry Oriented course delivered by KPMG in India
                </p>
                {/* <small class="mb-4 text-white">
                  KPMG in India program brought to you in collaboration with
                  edept
                </small> */}
                <img
                  width={180}
                  src="img/edept.jpeg"
                  className=" my-4"
                  alt="image"
                />
                {/* <img
                  src="img/kpmg-logo-1.webp"
                  alt="chandigharh University logo"
                  width={230}
                  className="mx-2"
                /> */}
                {/* Second Image wrapped in a white rectangular box */}
                <div className="bg-white p-3 d-inline-block mx-2">
                  <img
                    src="img/kpmg-logo-1.webp"
                    alt="Chandigarh University logo"
                    width={125}
                    className="mx-2"
                  />
                </div>
                <a className="btn btn-primary btn-lg my-4 " href="#programs">
                  Explore our Programs
                </a>
                <p class="mb-4">
                  Learn Top Tools like: Excel, SPSS, Python, Orange, Power BI,
                  Tableau, MySQL
                </p>
                <div>
                  <img
                    src="img/Microsoft_Excel-logo.svg"
                    alt="Chandigarh University logo"
                    width={60}
                  />
                  <img
                    src="img/spss-logo.webp"
                    alt="Chandigarh University logo"
                    width={60}
                  />
                  <img
                    src="img/python-logo.webp"
                    alt="Chandigarh University logo"
                    width={35}
                    className="mx-2"
                  />
                  <img
                    src="img/orange-logo.webp"
                    alt="Chandigarh University logo"
                    width={75}
                  />
                  <img
                    src="img/power-bi-logo.svg"
                    alt="Chandigarh University logo"
                    width={30}
                    className="mx-2"
                  />
                  <img
                    src="img/tableau-logo.webp"
                    alt="Chandigarh University logo"
                    width={30}
                    className="mx-2"
                  />
                  <img
                    src="img/MySQL-Logo.svg"
                    alt="Chandigarh University logo"
                    width={60}
                    className="mx-1"
                  />
                </div>
                {/* <div>
                <img
                    src="img/power-bi-logo.svg"
                    alt="Chandigarh University logo"
                    width={50}
                    className="mx-4"
                  />
                  <img
                    src="img/tableau-logo.webp"
                    alt="Chandigarh University logo"
                    width={50}

                    className="mx-2"
                  />
                  <img
                    src="img/MySQL-Logo.svg"
                    alt="Chandigarh University logo"
                    width={60}
                    className="mx-4"
                  />
                </div> */}

                {/* <div class="helpline d-flex flex-row align-items-center">
                                <img src="img/phone-icon.svg" alt="phone">
                                <div class="help-no mx-2">
                                    <small>Need Help?</small>
                                    <a href="tel:1800121388800">1800 1213 88800</a>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
          {/*<div class="carousel-item sliderImg slider-img2 h-100" data-bs-interval="5000">
                    <div class="container h-100 position-relative d-flex align-items-center">
                        <div class="banner-content">
                            <h2 class="mb-3">Global Learning at your pace & your place</h2>
                            <p class="mb-4">Learn anytime and anywhere through blended pedagogies that equip you with the requisite professional & life skills</p>
                            <a class="btn btn-primary btn-lg" href="#programs">Explore our Programs</a>
                            
          <div class="helpline d-flex flex-row align-items-center">
                                <img src="img/phone-icon.svg" alt="phone">
                                <div class="help-no mx-2">
                                    <small>Need Help?</small>
                                    <a href="tel:1800121388800">1800 1213 88800</a>
                                </div>
                            </div>
          
                        </div>
                    </div>
                </div>*/}
        </div>
        {/*<a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </a>*/}
      </div>
    </section>
  );
}

export default TopBanner;
