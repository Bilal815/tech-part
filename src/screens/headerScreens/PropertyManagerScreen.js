import React, { useState } from 'react';
import '../../styles/screens/headerScreens/propertyManagerScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';
import { Form } from 'react-bootstrap';
import CitiesServicesCardContainer from './../../components/globalComponents/CitiesServicesCardContainer';
import PropertyManagersSaying from './../../components/globalComponents/PropertyManagersSaying';
import { managerSaying } from '../../data/managerSaying';
import WiderImageContentCard from './../../components/globalComponents/WiderImageContentCard';

const PropertyManagerScreen = () => {
  // ScrollToTop();
  const [cardData, setCardData] = useState({
    image: `https://d7gh5vrfihrl.cloudfront.net/website/membership/puls-info.jpg`,
    options: [
      {
        title: `12-month service guarantee for repairs`,
        description: `Your appliances and devices are covered for a full year`,
      },
      {
        title: `Get 25% off the retail price`,
        description: `Save even more on every service all with Puls`,
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
    `Seamless scheduling via the Puls App`,
  ]);
  return (
    <div className='propertyManagerScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/property-banner-desktop.jpg'
        title='In-home service, solutions for, property managers'
        boldDescription='Your tenants satisfaction, guaranteed!'
        // number
      >
        <Form className='signup-form'></Form>
      </MainLandingSection>

      <div className='container-60 one-stop'>
        <h1 className='one-stop-bold-heading'>
          Your one-stop shop for all in-home service solutions
        </h1>
        <WiderImageContentCard cardData={cardData} />
      </div>
      <div className='tenants-covered'>
        <div className='container-60'>
          <h1 className='one-stop-bold-heading'>
            We've got your tenants covered <br /> with Puls+ Pro
          </h1>
          <h5 className='mt-3'>
            Get access to a wide-range of home <br /> repair & installation services
          </h5>
          <div className='puls-pro-card'>
            <div className='card-header'>puls+ Pro</div>
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
          <p className='one-stop-bold-heading m-0'>are saying about Puls+</p>
        </h1>
        <div className='property-manager-saying'>
          <PropertyManagersSaying managerSaying={managerSaying} />
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerScreen;
