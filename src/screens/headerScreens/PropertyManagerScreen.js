import React, { useState } from 'react';
import '../../styles/screens/headerScreens/propertyManagerScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';
import { Form, Row, Col } from 'react-bootstrap';
import CitiesServicesCardContainer from './../../components/globalComponents/CitiesServicesCardContainer';
import PropertyManagersSaying from './../../components/globalComponents/PropertyManagersSaying';
import { managerSaying } from '../../data/managerSaying';
import WiderImageContentCard from './../../components/globalComponents/WiderImageContentCard';

const PropertyManagerScreen = () => {
  ScrollToTop();
  const [cardData, setCardData] = useState({
    image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/puls-info.jpg`,
    options: [
      {
        title: `12-month service guarantee for repairs`,
        description: `Your appliances and devices are covered for a full year`,
      },
      {
        title: `Get 25% off the retail price`,
        description: `Save even more on every service all with TechNPart`,
      },
      {
        title: `Dedicated dispatch manager`,
        description: `Receive priority support and booking, always`,
      },
    ],
  });
  const [plusProPoints, setPlusProPoints] = useState([
    `Priority booking with same or next day service`,
    `12-month guarantee on all services`,
    `25% discount on all services`,
    `Monthly billing to minimize hassle`,
    `24/7 phone support with designated account manager`,
    `Seamless scheduling via the TechNPart App`,
  ]);

  const [signupFormFields, setSignupFormFields] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const { fullName, email, phone } = signupFormFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormFields({
      ...signupFormFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data  : ', e, fullName, email, phone);
  };

  const SignupFormLandingPage = ({ backgroundImage }) => {
    return (
      <div
        className='signupFormLandingPage'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className='container-75'>
          <Row className=''>
            <Col sm={12} md={6} lg={6}>
              <div className='content-wrapper'>
                <h1>
                  In-home service <br />
                  solutions for <br />
                  property managers
                </h1>
                <h4>Your tenants satisfaction, guaranteed!</h4>
                <div className='number'>
                  <span>Questions? </span>
                  <span className='blue'>Call (858) 225-8352</span>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='form-wrapper'>
                <form className='signup-form' onSubmit={handleSubmit}>
                  <div className='title center'>
                    <h4>Sign up for a quick demo</h4>
                    <h5>and get started right away</h5>
                  </div>
                  <div className='input-fields'>
                    <input
                      type='text'
                      name='fullName'
                      value={fullName}
                      onChange={handleInputChange}
                      placeholder='Full name'
                    />
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={handleInputChange}
                      placeholder='Email'
                    />
                    <input
                      type='text'
                      name='phone'
                      value={phone}
                      onChange={handleInputChange}
                      placeholder='Phone'
                    />
                  </div>
                  <button disabled={!fullName || !email || !phone} type='submit'>
                    Submit{' '}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  return (
    <div className='propertyManagerScreen'>
      <SignupFormLandingPage backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/property-banner-desktop.jpg' />
      <div className='container-60 one-stop'>
        <h1 className='one-stop-bold-heading'>
          Your one-stop shop for all in-home service solutions
        </h1>
        <WiderImageContentCard cardData={cardData} />
      </div>
      <div className='tenants-covered'>
        <div className='container-60'>
          <h1 className='one-stop-bold-heading'>
            We've got your tenants covered <br /> with TechNPart+ Pro
          </h1>
          <h5 className='mt-3'>
            Get access to a wide-range of home <br /> repair & installation services
          </h5>
          <div className='puls-pro-card'>
            <div className='card-header'>TechNPart+ Pro</div>
            <div className='card-body'>
              {plusProPoints &&
                plusProPoints.map((item, i) => (
                  <div key={i} className='point'>
                    <img
                      className='mr-1'
                      src='https://d7gh5vrfihrl.cloudfront.net/website/benefits/check-icon.svg'
                      alt='tick-image'
                    />
                    {item && <p>{item}</p>}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container-60 mt-5 mb-5'>
        <h1 className='one-stop-bold-heading center'>Tap into over 250 in-home services</h1>
        <h5 className='center mb-5'>
          Get access to a wide-range of home repair & installation services
        </h5>
        <CitiesServicesCardContainer />
      </div>
      <div className='property-managers-section container-75'>
        <h1 className='center-bold-heading center'>
          <p className='one-stop-bold-heading m-0'>See below what property managers</p>
          <p className='one-stop-bold-heading m-0'>are saying about TechNPart+</p>
        </h1>
        <div className='property-manager-saying'>
          <PropertyManagersSaying managerSaying={managerSaying} />
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerScreen;
