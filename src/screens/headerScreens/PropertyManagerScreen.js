import React from 'react';
import '../../styles/screens/headerScreens/propertyManagerScreen.scss';
import { ScrollToTop } from './../../utilities/index';
import MainLandingSection from './../../components/globalComponents/MainLandingSection';
import { Form } from 'react-bootstrap';

const PropertyManagerScreen = () => {
  ScrollToTop();
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
    </div>
  );
};

export default PropertyManagerScreen;
