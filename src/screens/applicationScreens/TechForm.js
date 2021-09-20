import React, { useState, useEffect } from "react";
import TechPartLogo from '../../assets/tech-app-logo.png';
import { Col, Row } from "react-bootstrap";
import { ScrollToTop } from '../../utilities/index';


const TechForm = () => {

  ScrollToTop();
  useEffect(()=>{
    const t = require('../../styles/screens/applicationScreens/main.min.css');
    const p = require('../../styles/screens/applicationScreens/second.css')
  },[])

  const [errorList, _errorList] 
    = useState(new Set(
        [
          "firstname", 
          "lastname", 
          "email", 
          "phone", 
          "technician_experience",
          "do_you_have_reliable_transportation",
          "predicted_days_to_first_job",
          "how_much_work_do_you_want_",
          "confirm_your_closest_city_area",
          "do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_",
          "how_did_you_hear_about_puls",
        ]
      ));
  const [firstName, _firstName] = useState("");
  const [lastName, _lastName] = useState("");
  const [email, _email] = useState("");
  const [phone, _phone] = useState("");
  const [address, _address] = useState("");
  const [technicianExperience, _technicianExperience] = useState("Please Select");
  const [shirtSize, _shirtSize] = useState("Please Select");
  const [doYouHaveReliableTransportation, _doYouHaveReliableTransportation] = useState("Please Select");
  const [predictedDaysToFirstJob, _predictedDaysToFirstJob] = useState("Please Select");
  const [howMuchWorkDoYouWant, _howMuchWorkDoYouWant] = useState("Please Select");
  const [confirmYourClosestCityArea, _confirmYourClosestCityArea] = useState("Please Select");
  const [employmentHistory, _employmentHistory] = useState("");
  const [doYouHaveAValidBusinessLicenseToPerformServicesInYourStateAndCounty, _doYouHaveAValidBusinessLicenseToPerformServicesInYourStateAndCounty] = useState("Please Select");
  const [howDidYouHearAboutPuls,_howDidYouHearAboutPuls] = useState("Please Select");

  const _inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let input = document.getElementsByName(name)[0]
    let errorblock = document.getElementsByName("error-"+name)[0]
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    switch (name) {
      case "firstname":
        _firstName(value);
        break;
    
      case "lastname":
        _lastName(value);
        break;
        
      case "email":
        _email(value);
        break;

      case "phone":
        _phone(value);
        break;
      
      case "technician_experience":
        _technicianExperience(value);
        break;
        
      case "do_you_have_reliable_transportation":
        _doYouHaveReliableTransportation(value);
        break; 
      
      case "predicted_days_to_first_job":
        _predictedDaysToFirstJob(value);
        break;
      
      case "how_much_work_do_you_want_":
        _howDidYouHearAboutPuls(value);
        break;
        
      case "confirm_your_closest_city_area":
        _confirmYourClosestCityArea(value);
        break;
        
      case "do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_":
        _doYouHaveAValidBusinessLicenseToPerformServicesInYourStateAndCounty(value);
        break;
        
      case "how_did_you_hear_about_puls":
        _howDidYouHearAboutPuls(value);
        break;

      default:
        break;
    }
    if(
      value.trim().length === 0 || 
      (name === "email" && !emailRegex.test(value)) ||
      (name === "technician_experience" && value === "Please Select") ||
      (name === "do_you_have_reliable_transportation" && value === "Please Select") ||
      (name === "predicted_days_to_first_job" && value === "Please Select") ||
      (name === "how_much_work_do_you_want_" && value === "Please Select") ||
      (name === "confirm_your_closest_city_area" && value === "Please Select") ||
      (name === "do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_" && value === "Please Select") ||
      (name === "how_did_you_hear_about_puls" && value === "Please Select")
    ){
      input.classList.add(...["invalid","error"]);
      errorblock.style.display = "block";
      _errorList(errorList.add(name));
    } else{
      input.classList.remove(...["invalid","error"]);
      errorblock.style.display = "none";
      errorList.delete(name);
      _errorList(errorList);
    }

  }
  
  const _onSubmit = (e) => {
    e.preventDefault();
    if(errorList.size > 0){
      errorList.forEach((name)=>{
        let input = document.getElementsByName(name)[0];
        let errorblock = document.getElementsByName("error-"+name)[0];
        input.classList.add(...["invalid","error"]);
        errorblock.style.display = "block";
      })
    }
  }

  return (
    <div className="tv-application body-wrapper">
      <div className="dnd-content-area vibrant__event_registration">
        <div className="body-container-wrapper">
          <div className="body-container">
            <div className="container-fluid body-section vibrant__event_registration--body">
              <div className="row-fluid-wrapper">
                <div className="row-fluid">
                  <div
                    className="span12 widget-span widget-type-cell "
                    style={{}}
                    data-widget-type="cell"
                    data-x={0}
                    data-w={12}
                  >
                    <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
                      <div className="row-fluid ">
                        <div
                          className="span12 widget-span widget-type-cell dnd-column"
                          style={{}}
                          data-widget-type="cell"
                          data-x={0}
                          data-w={12}
                        >
                          <div className="row-fluid-wrapper row-depth-1 row-number-2 dnd_area-column-1-row-0-margin dnd-row">
                            <div className="row-fluid ">
                              <div
                                className="span12 widget-span widget-type-custom_widget dnd-module"
                                style={{}}
                                data-widget-type="custom_widget"
                                data-x={0}
                                data-w={12}
                              >
                                <div
                                  id="hs_cos_wrapper_dnd_area-module-2"
                                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-logo"
                                  style={{}}
                                  data-hs-cos-general-type="widget"
                                  data-hs-cos-type="module"
                                >
                                  <span
                                    id="hs_cos_wrapper_dnd_area-module-2_hs_logo_widget"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"
                                    style={{}}
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="logo"
                                  >
                                    <a
                                      href="/"
                                      id="hs-link-dnd_area-module-2_hs_logo_widget"
                                      style={{
                                        borderWidth: "0px",
                                        border: "0px",
                                      }}
                                    >
                                      <img
                                        src={TechPartLogo}
                                        className="hs-image-widget "
                                        style={{
                                          width: "160px",
                                          borderWidth: "0px",
                                          border: "0px",
                                        }}
                                        alt="Logo_blue"
                                        title="Logo_blue"
                                        sizes="(max-width: 160px) 100vw, 100px"
                                        width={100}
                                      />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              {/*end widget-span */}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end row-wrapper */}
                          <div className="row-fluid-wrapper row-depth-1 row-number-3 dnd-row">
                            <div className="row-fluid ">
                              <div
                                className="span12 widget-span widget-type-custom_widget dnd_area-module-3-flexbox-positioning dnd_area-module-3-hidden dnd-module"
                                style={{}}
                                data-widget-type="custom_widget"
                                data-x={0}
                                data-w={12}
                              >
                                <div
                                  id="hs_cos_wrapper_dnd_area-module-3"
                                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                  style={{}}
                                  data-hs-cos-general-type="widget"
                                  data-hs-cos-type="module"
                                >
                                  <span
                                    id="hs_cos_wrapper_dnd_area-module-3_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                    style={{}}
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="rich_text"
                                  >
                                    <h1
                                      style={{
                                        textAlign: "center",
                                        fontSize: "36px",
                                      }}
                                    >
                                      <span style={{ color: "#595959" }}>
                                        Flexible Schedule, Unlimited
                                        Earnings&nbsp;
                                      </span>
                                    </h1>
                                  </span>
                                </div>
                              </div>
                              {/*end widget-span */}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end row-wrapper */}
                          <div className="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
                            <div className="row-fluid ">
                              <div
                                className="span12 widget-span widget-type-custom_widget dnd_area-module-4-flexbox-positioning dnd-module"
                                style={{}}
                                data-widget-type="custom_widget"
                                data-x={0}
                                data-w={12}
                              >
                                <div
                                  id="hs_cos_wrapper_dnd_area-module-4"
                                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                  style={{}}
                                  data-hs-cos-general-type="widget"
                                  data-hs-cos-type="module"
                                >
                                  <span
                                    id="hs_cos_wrapper_dnd_area-module-4_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                    style={{}}
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="rich_text"
                                  >
                                    <p
                                      style={{
                                        textAlign: "center",
                                        fontSize: "20px",
                                      }}
                                    >
                                      <span style={{ color: "#595959" }}>
                                        Gain access to hundreds of jobs in your
                                        city and build your own schedule.
                                      </span>
                                    </p>
                                  </span>
                                </div>
                              </div>
                              {/*end widget-span */}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end row-wrapper */}
                          <div className="row-fluid-wrapper row-depth-1 row-number-5 dnd_area-column-1-row-3-margin dnd-row">
                            <div className="row-fluid ">
                              <div
                                className="span12 widget-span widget-type-custom_widget dnd-module"
                                style={{}}
                                data-widget-type="custom_widget"
                                data-x={0}
                                data-w={12}
                              >
                                <div
                                  id="hs_cos_wrapper_dnd_area-module-5"
                                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-form"
                                  style={{}}
                                  data-hs-cos-general-type="widget"
                                  data-hs-cos-type="module"
                                >
                                  <span
                                    id="hs_cos_wrapper_dnd_area-module-5_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_form"
                                    style={{}}
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="form"
                                  >
                                    <div id="hs_form_target_dnd_area-module-5">
                                      <form
                                        noValidate
                                        acceptCharset="UTF-8"
                                        onSubmit={e=>_onSubmit(e)}
                                        className="hs-form stacked hs-custom-form hs-form-private hsForm_231289c5-9fb4-4ebe-83b1-d027a68ed6be hs-form-231289c5-9fb4-4ebe-83b1-d027a68ed6be hs-form-231289c5-9fb4-4ebe-83b1-d027a68ed6be_031d538e-bce4-4ccc-b920-b4dcd893608a"
                                      >
                                        <fieldset
                                          className="form-columns-2"
                                          data-reactid=".hbspt-forms-0.1:$0"
                                        >
                                          <Row>
                                            <Col md={6} sm={12}>
                                              <div
                                                className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname"
                                              >
                                                <label
                                                  id="label-firstname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  placeholder="Enter your First Name"
                                                  htmlFor="firstname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$firstname.0"
                                                >
                                                  <span data-reactid=".hbspt-forms-0.1:$0.1:$firstname.0.0">
                                                    First Name
                                                  </span>
                                                  <span
                                                    className="hs-form-required"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.0.1"
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <legend
                                                  className="hs-field-desc"
                                                  style={{ display: "none" }}
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$firstname.1"
                                                />
                                                <div
                                                  className="input"
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$firstname.$firstname"
                                                >
                                                  <input
                                                    id="firstname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                    className="hs-input"
                                                    type="text"
                                                    name="firstname"
                                                    required
                                                    value={firstName}
                                                    onChange={(e) => {_inputHandler(e)}}
                                                    autoComplete="given-name"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.$firstname.0"
                                                    inputMode="text"
                                                  />
                                                  <ul
                                                    name={"error-firstname"}
                                                    className="no-list hs-error-msgs inputs-list"
                                                    style={{ display: "none" }}
                                                    role="alert"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                                  >
                                                    <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                      <label
                                                        className="hs-error-msg"
                                                        data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                      >
                                                        Please complete this
                                                        required field.
                                                      </label>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col md={6} sm={12}>
                                              <div
                                                className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$lastname"
                                              >
                                                <label
                                                  id="label-lastname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  placeholder="Enter your Last name"
                                                  htmlFor="lastname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$lastname.0"
                                                >
                                                  <span data-reactid=".hbspt-forms-0.1:$0.1:$lastname.0.0">
                                                    Last name
                                                  </span>
                                                  <span
                                                    className="hs-form-required"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$lastname.0.1"
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <legend
                                                  className="hs-field-desc"
                                                  style={{ display: "none" }}
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$lastname.1"
                                                />
                                                <div
                                                  className="input"
                                                  data-reactid=".hbspt-forms-0.1:$0.1:$lastname.$lastname"
                                                >
                                                  <input
                                                    id="lastname-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                    className="hs-input"
                                                    type="text"
                                                    name="lastname"
                                                    required
                                                    value={lastName}
                                                    onChange={(e) => {_inputHandler(e)}}
                                                    autoComplete="family-name"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$lastname.$lastname.0"
                                                    inputMode="text"
                                                  />
                                                  <ul
                                                    name={"error-lastname"}
                                                    className="no-list hs-error-msgs inputs-list"
                                                    style={{ display: "none" }}
                                                    role="alert"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                                  >
                                                    <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                      <label
                                                        className="hs-error-msg"
                                                        data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                      >
                                                        Please complete this
                                                        required field.
                                                      </label>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-2"
                                          data-reactid=".hbspt-forms-0.1:$1"
                                        >
                                          <Row>
                                            <Col md={6} sm={12}>
                                              <div
                                                className="hs_email hs-email hs-fieldtype-text field hs-form-field"
                                                data-reactid=".hbspt-forms-0.1:$1.1:$email"
                                              >
                                                <label
                                                  id="label-email-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  placeholder="Enter your Your Email"
                                                  htmlFor="email-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$email.0"
                                                >
                                                  <span data-reactid=".hbspt-forms-0.1:$1.1:$email.0.0">
                                                    Your Email
                                                  </span>
                                                  <span
                                                    className="hs-form-required"
                                                    data-reactid=".hbspt-forms-0.1:$1.1:$email.0.1"
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <legend
                                                  className="hs-field-desc"
                                                  style={{ display: "none" }}
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$email.1"
                                                />
                                                <div
                                                  className="input"
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$email.$email"
                                                >
                                                  <input
                                                    id="email-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                    className="hs-input"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => {_inputHandler(e)}}
                                                    autoComplete="email"
                                                    data-reactid=".hbspt-forms-0.1:$1.1:$email.$email.0"
                                                    inputMode="email"
                                                  />
                                                  <ul
                                                    name={"error-email"}
                                                    className="no-list hs-error-msgs inputs-list"
                                                    style={{ display: "none" }}
                                                    role="alert"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                                  >
                                                    <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                      <label
                                                        className="hs-error-msg"
                                                        data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                      >
                                                        Invalid email.
                                                      </label>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col md={6} sm={12}>
                                              <div
                                                className="hs_phone hs-phone hs-fieldtype-text field hs-form-field"
                                                data-reactid=".hbspt-forms-0.1:$1.1:$phone"
                                              >
                                                <label
                                                  id="label-phone-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  placeholder="Enter your Phone number"
                                                  htmlFor="phone-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$phone.0"
                                                >
                                                  <span data-reactid=".hbspt-forms-0.1:$1.1:$phone.0.0">
                                                    Phone number
                                                  </span>
                                                  <span
                                                    className="hs-form-required"
                                                    data-reactid=".hbspt-forms-0.1:$1.1:$phone.0.1"
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <legend
                                                  className="hs-field-desc"
                                                  style={{ display: "none" }}
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$phone.1"
                                                />
                                                <div
                                                  className="input"
                                                  data-reactid=".hbspt-forms-0.1:$1.1:$phone.$phone"
                                                >
                                                  <input
                                                    id="phone-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                    className="hs-input"
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={phone}
                                                    onChange={(e) => {_inputHandler(e)}}
                                                    autoComplete="tel"
                                                    data-reactid=".hbspt-forms-0.1:$1.1:$phone.$phone.0"
                                                    inputMode="tel"
                                                  />
                                                  <ul
                                                    name={"error-phone"}
                                                    className="no-list hs-error-msgs inputs-list"
                                                    style={{ display: "none" }}
                                                    role="alert"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                                  >
                                                    <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                      <label
                                                        className="hs-error-msg"
                                                        data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                      >
                                                        Please complete this
                                                        required field.
                                                      </label>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$2"
                                        >
                                          <div
                                            className="hs_address hs-address hs-fieldtype-text field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$2.1:$address"
                                          >
                                            <label
                                              id="label-address-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Address"
                                              htmlFor="address-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$2.1:$address.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$2.1:$address.0.0">
                                                Address
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$2.1:$address.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$2.1:$address.$address"
                                            >
                                              <input
                                                id="address-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                className="hs-input"
                                                type="text"
                                                name="address"
                                                value={address}
                                                onChange={(e)=>{_address(e.target.value)}}
                                                autoComplete="street-address"
                                                data-reactid=".hbspt-forms-0.1:$2.1:$address.$address.0"
                                                inputMode="text"
                                              />
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$3"
                                        >
                                          <div
                                            className="hs_technician_experience hs-technician_experience hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience"
                                          >
                                            <label
                                              id="label-technician_experience-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Tell us about your experience"
                                              htmlFor="technician_experience-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.0.0">
                                                Tell us about your experience
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "block" }}
                                              data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.1"
                                            >
                                              Experience is a requirement in
                                              order to start working.
                                            </legend>
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience"
                                            >
                                              <select
                                                id="technician_experience-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="technician_experience"
                                                data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="I am a master in the trade"
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.1:$I am a master in the trade"
                                                >
                                                  I am a master in the trade
                                                </option>
                                                <option
                                                  value="I have professional experience"
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.1:$I have professional experience"
                                                >
                                                  I have professional experience
                                                </option>
                                                <option
                                                  value="I have relevant experience"
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.1:$I have relevant experience"
                                                >
                                                  I have relevant experience
                                                </option>
                                                <option
                                                  value="I have little experience"
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.1:$I have little experience"
                                                >
                                                  I have little experience
                                                </option>
                                                <option
                                                  value="No experience"
                                                  data-reactid=".hbspt-forms-0.1:$3.1:$technician_experience.$technician_experience.0.1:$No experience"
                                                >
                                                  No experience
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-technician_experience"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$4"
                                        >
                                          <div
                                            className="hs_shirt_size hs-shirt_size hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size"
                                          >
                                            <label
                                              id="label-shirt_size-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your What is your T-Shirt Size?"
                                              htmlFor="shirt_size-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.0.0">
                                                What is your T-Shirt Size?
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size"
                                            >
                                              <select
                                                id="shirt_size-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                className="hs-input is-placeholder"
                                                name="shirt_size"
                                                data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_shirtSize(e.target.value)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="XS"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$XS"
                                                >
                                                  XS
                                                </option>
                                                <option
                                                  value="S"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$S"
                                                >
                                                  Small
                                                </option>
                                                <option
                                                  value="M"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$M"
                                                >
                                                  Medium
                                                </option>
                                                <option
                                                  value="L"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$L"
                                                >
                                                  Large
                                                </option>
                                                <option
                                                  value="XL"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$XL"
                                                >
                                                  X Large
                                                </option>
                                                <option
                                                  value="XXL"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$XXL"
                                                >
                                                  XX Large
                                                </option>
                                                <option
                                                  value="XXXL"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$XXXL"
                                                >
                                                  XXX Large
                                                </option>
                                                <option
                                                  value="XXXXL"
                                                  data-reactid=".hbspt-forms-0.1:$4.1:$shirt_size.$shirt_size.0.1:$XXXXL"
                                                >
                                                  XXXX Large
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$5"
                                        >
                                          <div
                                            className="hs_do_you_have_reliable_transportation hs-do_you_have_reliable_transportation hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation"
                                          >
                                            <label
                                              id="label-do_you_have_reliable_transportation-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Do You Have Reliable Transportation"
                                              htmlFor="do_you_have_reliable_transportation-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.0.0">
                                                Do You Have Reliable
                                                Transportation
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "block" }}
                                              data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.1"
                                            >
                                              Reliable transportation is a
                                              requirement in order to start
                                              working.
                                            </legend>
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation"
                                            >
                                              <select
                                                id="do_you_have_reliable_transportation-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="do_you_have_reliable_transportation"
                                                data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="I have my own vehicle"
                                                  data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation.0.1:$I have my own vehicle"
                                                >
                                                  I have my own vehicle
                                                </option>
                                                <option
                                                  value="I have reliable transportation"
                                                  data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation.0.1:$I have reliable transportation"
                                                >
                                                  I have reliable transportation
                                                </option>
                                                <option
                                                  value="I would need a car"
                                                  data-reactid=".hbspt-forms-0.1:$5.1:$do_you_have_reliable_transportation.$do_you_have_reliable_transportation.0.1:$I would need a car"
                                                >
                                                  I would need a car
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-do_you_have_reliable_transportation"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$6"
                                        >
                                          <div
                                            className="hs_predicted_days_to_first_job hs-predicted_days_to_first_job hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job"
                                          >
                                            <label
                                              id="label-predicted_days_to_first_job-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your How Soon Do You Want Work?"
                                              htmlFor="predicted_days_to_first_job-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.0.0">
                                                How Soon Do You Want Work?
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job"
                                            >
                                              <select
                                                id="predicted_days_to_first_job-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="predicted_days_to_first_job"
                                                data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="0 - 3 Days"
                                                  data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0.1:$0 - 3 Days"
                                                >
                                                  0 - 3 Days
                                                </option>
                                                <option
                                                  value="4 - 6 Days"
                                                  data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0.1:$4 - 6 Days"
                                                >
                                                  4 - 6 Days
                                                </option>
                                                <option
                                                  value="7 - 14 Days"
                                                  data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0.1:$7 - 14 Days"
                                                >
                                                  7 - 14 Days
                                                </option>
                                                <option
                                                  value="15+ Days"
                                                  data-reactid=".hbspt-forms-0.1:$6.1:$predicted_days_to_first_job.$predicted_days_to_first_job.0.1:$15+ Days"
                                                >
                                                  15+ Days
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-predicted_days_to_first_job"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$7"
                                        >
                                          <div
                                            className="hs_how_much_work_do_you_want_ hs-how_much_work_do_you_want_ hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_"
                                          >
                                            <label
                                              id="label-how_much_work_do_you_want_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your How Much Do You Want To Work?"
                                              htmlFor="how_much_work_do_you_want_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.0.0">
                                                How Much Do You Want To Work?
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_"
                                            >
                                              <select
                                                id="how_much_work_do_you_want_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="how_much_work_do_you_want_"
                                                data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="Full Time"
                                                  data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0.1:$Full Time"
                                                >
                                                  Full Time
                                                </option>
                                                <option
                                                  value="Part Time"
                                                  data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0.1:$Part Time"
                                                >
                                                  Part Time
                                                </option>
                                                <option
                                                  value="Flexible Schedule"
                                                  data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0.1:$Flexible Schedule"
                                                >
                                                  Flexible Schedule
                                                </option>
                                                <option
                                                  value="A Few Jobs"
                                                  data-reactid=".hbspt-forms-0.1:$7.1:$how_much_work_do_you_want_.$how_much_work_do_you_want_.0.1:$A Few Jobs"
                                                >
                                                  A Few Jobs
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-how_much_work_do_you_want_"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$8"
                                        >
                                          <div
                                            className="hs_confirm_your_closest_city_area hs-confirm_your_closest_city_area hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area"
                                          >
                                            <label
                                              id="label-confirm_your_closest_city_area-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Confirm Your City / Area"
                                              htmlFor="confirm_your_closest_city_area-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.0.0">
                                                Confirm Your City / Area
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "block" }}
                                              data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.1"
                                            >
                                              If you do not see your city below,
                                              we are not currently accepting
                                              applications for your area.
                                            </legend>
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area"
                                            >
                                              <select
                                                id="confirm_your_closest_city_area-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="confirm_your_closest_city_area"
                                                data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_confirmYourClosestCityArea(e.target.value)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="Asheville"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Asheville"
                                                >
                                                  Asheville
                                                </option>
                                                <option
                                                  value="Atlanta"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Atlanta"
                                                >
                                                  Atlanta
                                                </option>
                                                <option
                                                  value="Austin"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Austin"
                                                >
                                                  Austin
                                                </option>
                                                <option
                                                  value="Baltimore"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Baltimore"
                                                >
                                                  Baltimore
                                                </option>
                                                <option
                                                  value="Baton Rouge"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Baton Rouge"
                                                >
                                                  Baton Rouge
                                                </option>
                                                <option
                                                  value="Bentonville"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Bentonville"
                                                >
                                                  Bentonville
                                                </option>
                                                <option
                                                  value="Boston"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Boston"
                                                >
                                                  Boston
                                                </option>
                                                <option
                                                  value="Charlotte"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Charlotte"
                                                >
                                                  Charlotte
                                                </option>
                                                <option
                                                  value="Chicago"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Chicago"
                                                >
                                                  Chicago
                                                </option>
                                                <option
                                                  value="Cleveland"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Cleveland"
                                                >
                                                  Cleveland
                                                </option>
                                                <option
                                                  value="Colorado Springs"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Colorado Springs"
                                                >
                                                  Colorado Springs
                                                </option>
                                                <option
                                                  value="Dallas"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Dallas"
                                                >
                                                  Dallas
                                                </option>
                                                <option
                                                  value="Dayton, OH"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Dayton, OH"
                                                >
                                                  Dayton, OH
                                                </option>
                                                <option
                                                  value="Daytona, FL"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Daytona, FL"
                                                >
                                                  Daytona, FL
                                                </option>
                                                <option
                                                  value="Washington DC"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Washington DC"
                                                >
                                                  Washington DC
                                                </option>
                                                <option
                                                  value="Denver"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Denver"
                                                >
                                                  Denver
                                                </option>
                                                <option
                                                  value="Detroit"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Detroit"
                                                >
                                                  Detroit
                                                </option>
                                                <option
                                                  value="El Paso"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$El Paso"
                                                >
                                                  El Paso
                                                </option>
                                                <option
                                                  value="Fort Lauderdale"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Fort Lauderdale"
                                                >
                                                  Fort Lauderdale
                                                </option>
                                                <option
                                                  value="Indianapolis"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Indianapolis"
                                                >
                                                  Indianapolis
                                                </option>
                                                <option
                                                  value="Jacksonville"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Jacksonville"
                                                >
                                                  Jacksonville
                                                </option>
                                                <option
                                                  value="Kansas City"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Kansas City"
                                                >
                                                  Kansas City
                                                </option>
                                                <option
                                                  value="Las Vegas"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Las Vegas"
                                                >
                                                  Las Vegas
                                                </option>
                                                <option
                                                  value="Los Angeles"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Los Angeles"
                                                >
                                                  Los Angeles
                                                </option>
                                                <option
                                                  value="Louisville, KY"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Louisville, KY"
                                                >
                                                  Louisville, KY
                                                </option>
                                                <option
                                                  value="Memphis"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Memphis"
                                                >
                                                  Memphis
                                                </option>
                                                <option
                                                  value="Miami"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Miami"
                                                >
                                                  Miami
                                                </option>
                                                <option
                                                  value="Nashville"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Nashville"
                                                >
                                                  Nashville
                                                </option>
                                                <option
                                                  value="New jersey"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$New jersey"
                                                >
                                                  Jersey City
                                                </option>
                                                <option
                                                  value="New Orleans"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$New Orleans"
                                                >
                                                  New Orleans
                                                </option>
                                                <option
                                                  value="New York"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$New York"
                                                >
                                                  New York
                                                </option>
                                                <option
                                                  value="Newark"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Newark"
                                                >
                                                  Newark
                                                </option>
                                                <option
                                                  value="Oklahoma City"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Oklahoma City"
                                                >
                                                  Oklahoma City
                                                </option>
                                                <option
                                                  value="Orlando"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Orlando"
                                                >
                                                  Orlando
                                                </option>
                                                <option
                                                  value="Philadelphia"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Philadelphia"
                                                >
                                                  Philadelphia
                                                </option>
                                                <option
                                                  value="Phoenix"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Phoenix"
                                                >
                                                  Phoenix
                                                </option>
                                                <option
                                                  value="Portland, OR"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Portland, OR"
                                                >
                                                  Portland, OR
                                                </option>
                                                <option
                                                  value="Raleigh-Durham"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Raleigh-Durham"
                                                >
                                                  Raleigh-Durham
                                                </option>
                                                <option
                                                  value="Sacramento"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Sacramento"
                                                >
                                                  Sacramento
                                                </option>
                                                <option
                                                  value="San Antonio"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$San Antonio"
                                                >
                                                  San Antonio
                                                </option>
                                                <option
                                                  value="San Diego"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$San Diego"
                                                >
                                                  San Diego
                                                </option>
                                                <option
                                                  value="San Franscisco"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$San Franscisco"
                                                >
                                                  San Francisco
                                                </option>
                                                <option
                                                  value="Seattle"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Seattle"
                                                >
                                                  Seattle
                                                </option>
                                                <option
                                                  value="Tampa"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Tampa"
                                                >
                                                  Tampa
                                                </option>
                                                <option
                                                  value="Tucson"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Tucson"
                                                >
                                                  Tucson
                                                </option>
                                                <option
                                                  value="Virginia Beach"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Virginia Beach"
                                                >
                                                  Virginia Beach
                                                </option>
                                                <option
                                                  value="Houston"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Houston"
                                                >
                                                  Houston
                                                </option>
                                                <option
                                                  value="Waco, TX"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Waco, TX"
                                                >
                                                  Waco, TX
                                                </option>
                                                <option
                                                  value="Lubbock, TX"
                                                  data-reactid=".hbspt-forms-0.1:$8.1:$confirm_your_closest_city_area.$confirm_your_closest_city_area.0.1:$Lubbock, TX"
                                                >
                                                  Lubbock, TX
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-confirm_your_closest_city_area"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$9"
                                        >
                                          <div
                                            className="hs_employment_history hs-employment_history hs-fieldtype-text field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$9.1:$employment_history"
                                          >
                                            <label
                                              id="label-employment_history-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Current or Previous place of employment"
                                              htmlFor="employment_history-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$9.1:$employment_history.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$9.1:$employment_history.0.0">
                                                Current or Previous place of
                                                employment
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$9.1:$employment_history.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$9.1:$employment_history.$employment_history"
                                            >
                                              <input
                                                id="employment_history-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                className="hs-input"
                                                type="text"
                                                placeholder="Please Enter"
                                                name="employment_history"
                                                value={employmentHistory}
                                                onChange={(e)=>{_employmentHistory(e.target.value)}}
                                                data-reactid=".hbspt-forms-0.1:$9.1:$employment_history.$employment_history.0"
                                                inputMode="text"
                                              />
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$10"
                                        >
                                          <div
                                            className="hs_do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_ hs-do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_ hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_"
                                          >
                                            <label
                                              id="label-do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your Do you have a valid business license to perform services in your state and county?"
                                              htmlFor="do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0.0">
                                                Do you have a valid business
                                                license to perform services in
                                                your state and county?
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_"
                                            >
                                              <select
                                                id="do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_"
                                                data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="Yes"
                                                  data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0.1:$Yes"
                                                >
                                                  Yes
                                                </option>
                                                <option
                                                  value="No"
                                                  data-reactid=".hbspt-forms-0.1:$10.1:$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.$do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_.0.1:$No"
                                                >
                                                  No
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-do_you_have_a_valid_business_license_to_perform_services_in_your_state_and_county_"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <fieldset
                                          className="form-columns-1"
                                          data-reactid=".hbspt-forms-0.1:$11"
                                        >
                                          <div
                                            className="hs_how_did_you_hear_about_puls hs-how_did_you_hear_about_puls hs-fieldtype-select field hs-form-field"
                                            data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls"
                                          >
                                            <label
                                              id="label-how_did_you_hear_about_puls-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              placeholder="Enter your How did you hear about Puls?"
                                              htmlFor="how_did_you_hear_about_puls-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                              data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.0"
                                            >
                                              <span data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.0.0">
                                                How did you hear about Puls?
                                              </span>
                                              <span
                                                className="hs-form-required"
                                                data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.0.1"
                                              >
                                                *
                                              </span>
                                            </label>
                                            <legend
                                              className="hs-field-desc"
                                              style={{ display: "none" }}
                                              data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.1"
                                            />
                                            <div
                                              className="input"
                                              data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls"
                                            >
                                              <select
                                                id="how_did_you_hear_about_puls-231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                                required
                                                className="hs-input is-placeholder"
                                                name="how_did_you_hear_about_puls"
                                                data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0"
                                                defaultValue={"Please Select"}
                                                onChange={(e)=>{_inputHandler(e)}}
                                              >
                                                <option
                                                  value="Please Select"
                                                  disabled
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.0"
                                                >
                                                  Please Select
                                                </option>
                                                <option
                                                  value="Craigslist"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Craigslist"
                                                >
                                                  Craigslist
                                                </option>
                                                <option
                                                  value="Indeed"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Indeed"
                                                >
                                                  Indeed
                                                </option>
                                                <option
                                                  value="Friend (Referral)"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Friend (Referral)"
                                                >
                                                  Friend (Referral)
                                                </option>
                                                <option
                                                  value="Google"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Google"
                                                >
                                                  Google
                                                </option>
                                                <option
                                                  value="Facebook"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Facebook"
                                                >
                                                  Facebook
                                                </option>
                                                <option
                                                  value="Instagram"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Instagram"
                                                >
                                                  Instagram
                                                </option>
                                                <option
                                                  value="App Jobs"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$App Jobs"
                                                >
                                                  Appjobs
                                                </option>
                                                <option
                                                  value="Puls.com"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Puls=1com"
                                                >
                                                  Puls website
                                                </option>
                                                <option
                                                  value="Monster"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Monster"
                                                >
                                                  Monster
                                                </option>
                                                <option
                                                  value="Zip Recruiter"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Zip Recruiter"
                                                >
                                                  Zip Recruiter
                                                </option>
                                                <option
                                                  value="Linkedin"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Linkedin"
                                                >
                                                  Linkedin
                                                </option>
                                                <option
                                                  value="Upward"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Upward"
                                                >
                                                  Upward
                                                </option>
                                                <option
                                                  value="House of Gigs"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$House of Gigs"
                                                >
                                                  House of Gigs
                                                </option>
                                                <option
                                                  value="Other"
                                                  data-reactid=".hbspt-forms-0.1:$11.1:$how_did_you_hear_about_puls.$how_did_you_hear_about_puls.0.1:$Other"
                                                >
                                                  Other
                                                </option>
                                              </select>
                                              <ul
                                                name={"error-how_did_you_hear_about_puls"}
                                                className="no-list hs-error-msgs inputs-list"
                                                style={{ display: "none" }}
                                                role="alert"
                                                data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3"
                                              >
                                                <li data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0">
                                                  <label
                                                    className="hs-error-msg"
                                                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname.3.$0.0"
                                                  >
                                                    Please select an option from the dropdown menu.
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </fieldset>
                                        <noscript data-reactid=".hbspt-forms-0.2" />
                                        <div
                                          className="hs_submit hs-submit"
                                          data-reactid=".hbspt-forms-0.5"
                                        >
                                          <div
                                            className="hs-field-desc"
                                            style={{ display: "none" }}
                                            data-reactid=".hbspt-forms-0.5.0"
                                          />
                                          <div
                                            className="actions"
                                            data-reactid=".hbspt-forms-0.5.1"
                                          >
                                            <input
                                              type="submit"
                                              defaultValue="Next!"
                                              className="hs-button primary large"
                                              data-reactid=".hbspt-forms-0.5.1.0"
                                            />
                                          </div>
                                        </div>
                                        {/* <noscript data-reactid=".hbspt-forms-0.6" />
                                        <input
                                          name="hs_context"
                                          type="hidden"
                                          defaultValue='{"rumScriptExecuteTime":562.5,"rumServiceResponseTime":1029.5,"rumFormRenderTime":3.700000047683716,"rumTotalRenderTime":1037.4000000953674,"rumTotalRequestTime":464.59999990463257,"lang":"en","disableCookieSubmission":true,"embedAtTimestamp":"1631607674329","formDefinitionUpdatedAt":"1622670755506","pageUrl":"https://info.puls.com/application-tv?hsLang=en","pageTitle":"Tell us your Your Qualifications","source":"FormsNext-static-5.365","timestamp":1631607674334,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36","referrer":"https://lp.puls.com/join-as-a-tech","originalEmbedContext":{"portalId":"4039866","formId":"231289c5-9fb4-4ebe-83b1-d027a68ed6be","formInstanceId":"8588","pageId":"37039400146","region":"na1","pageName":"Tell us your Your Qualifications","redirectUrl":"https://lp.puls.com/thank-you-tv","target":"#hs_form_target_dnd_area-module-5","contentType":"landing-page","formsBaseUrl":"/_hcms/forms/","formData":{"cssClass":"hs-form stacked hs-custom-form"},"hutk":"6ea5ae2eeeb8dc2591bddb025b83e3fe"},"canonicalUrl":"https://info.puls.com/application-tv","pageId":"37039400146","pageName":"Tell us your Your Qualifications","redirectUrl":"https://lp.puls.com/thank-you-tv","formInstanceId":"8588","urlParams":{"hsLang":"en"},"formTarget":"#hs_form_target_dnd_area-module-5","correlationId":"f83254e3-7d36-463b-9af1-e52ae425f8cf","contentType":"landing-page","hutk":"6ea5ae2eeeb8dc2591bddb025b83e3fe","useRecaptchaEnterprise":true,"isHostedOnHubspot":true}'
                                          data-reactid=".hbspt-forms-0.7"
                                        />
                                        <iframe
                                          name="target_iframe_231289c5-9fb4-4ebe-83b1-d027a68ed6be_8588"
                                          style={{ display: "none" }}
                                          data-reactid=".hbspt-forms-0.8"
                                        /> */}
                                      </form>
                                    </div>
                                  </span>
                                </div>
                              </div>
                              {/*end widget-span */}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end row-wrapper */}
                          <div className="row-fluid-wrapper row-depth-1 row-number-6 dnd_area-column-1-row-4-margin dnd-row">
                            <div className="row-fluid ">
                              <div
                                className="span12 widget-span widget-type-custom_widget dnd-module"
                                style={{}}
                                data-widget-type="custom_widget"
                                data-x={0}
                                data-w={12}
                              >
                                <div
                                  id="hs_cos_wrapper_dnd_area-module-6"
                                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                  style={{}}
                                  data-hs-cos-general-type="widget"
                                  data-hs-cos-type="module"
                                >
                                  <span
                                    id="hs_cos_wrapper_dnd_area-module-6_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                    style={{}}
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="linked_image"
                                  >
                                    <img
                                      src="https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=2649&height=1154&name=Untitled-2%20(1).jpg"
                                      className="hs-image-widget "
                                      style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                      }}
                                      alt="Untitled-2 (1)"
                                      title="Untitled-2 (1)"
                                      srcSet="https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=1325&height=577&name=Untitled-2%20(1).jpg 1325w, https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=2649&height=1154&name=Untitled-2%20(1).jpg 2649w, https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=3974&height=1731&name=Untitled-2%20(1).jpg 3974w, https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=5298&height=2308&name=Untitled-2%20(1).jpg 5298w, https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=6623&height=2885&name=Untitled-2%20(1).jpg 6623w, https://info.puls.com/hs-fs/hubfs/Untitled-2%20(1).jpg?width=7947&height=3462&name=Untitled-2%20(1).jpg 7947w"
                                      sizes="(max-width: 2649px) 100vw, 2649px"
                                      width={2649}
                                      height={1154}
                                    />
                                  </span>
                                </div>
                              </div>
                              {/*end widget-span */}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end row-wrapper */}
                        </div>
                        {/*end widget-span */}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end row-wrapper */}
                    <div className="row-fluid-wrapper row-depth-1 row-number-7 dnd_area-row-1-padding dnd-section">
                      <div className="row-fluid ">
                        <div
                          className="span12 widget-span widget-type-custom_widget dnd-module"
                          style={{}}
                          data-widget-type="custom_widget"
                          data-x={0}
                          data-w={12}
                        >
                          <div
                            id="hs_cos_wrapper_dnd_area-module-7"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="module"
                          >
                            <div className="social-links social-links--center social-links--grey">
                              <a
                                href="https://www.facebook.com/pulsdotcom/"
                                id="social-links__icon_dnd_area-module-7"
                                className="social-links__icon"
                                style={{
                                  paddingLeft: "1px",
                                  paddingRight: "1px",
                                }}
                                target="_blank"
                                rel="noopener"
                              >
                                <span
                                  className="social-links__icon-wrapper social-links__icon-wrapper--circle social-links__icon-wrapper--grey"
                                  style={{
                                    color: "",
                                    height: "40px",
                                    width: "40px",
                                  }}
                                >
                                  <svg
                                    version={1.0}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 264 512"
                                    aria-hidden="true"
                                  >
                                    <g id="layer1">
                                      <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" />
                                    </g>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="https://www.instagram.com/pulscom/"
                                id="social-links__icon_dnd_area-module-7"
                                className="social-links__icon"
                                style={{
                                  paddingLeft: "1px",
                                  paddingRight: "1px",
                                }}
                                target="_blank"
                                rel="noopener"
                              >
                                <span
                                  className="social-links__icon-wrapper social-links__icon-wrapper--circle social-links__icon-wrapper--grey"
                                  style={{
                                    color: "",
                                    height: "40px",
                                    width: "40px",
                                  }}
                                >
                                  <svg
                                    version={1.0}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    aria-hidden="true"
                                  >
                                    <g id="layer1">
                                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </g>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="https://twitter.com/pulscom?s=20"
                                id="social-links__icon_dnd_area-module-7"
                                className="social-links__icon"
                                style={{
                                  paddingLeft: "1px",
                                  paddingRight: "1px",
                                }}
                                target="_blank"
                                rel="noopener"
                              >
                                <span
                                  className="social-links__icon-wrapper social-links__icon-wrapper--circle social-links__icon-wrapper--grey"
                                  style={{
                                    color: "",
                                    height: "40px",
                                    width: "40px",
                                  }}
                                >
                                  <svg
                                    version={1.0}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    aria-hidden="true"
                                  >
                                    <g id="layer1">
                                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </g>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="mailto:recruit@puls.com"
                                id="social-links__icon_dnd_area-module-7"
                                className="social-links__icon"
                                style={{
                                  paddingLeft: "1px",
                                  paddingRight: "1px",
                                }}
                                target="_blank"
                                rel="noopener"
                              >
                                <span
                                  className="social-links__icon-wrapper social-links__icon-wrapper--circle social-links__icon-wrapper--grey"
                                  style={{
                                    color: "",
                                    height: "40px",
                                    width: "40px",
                                  }}
                                >
                                  <svg
                                    version={1.0}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    aria-hidden="true"
                                  >
                                    <g id="layer1">
                                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                    </g>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*end widget-span */}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end row-wrapper */}
                  </div>
                  {/*end widget-span */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechForm;
