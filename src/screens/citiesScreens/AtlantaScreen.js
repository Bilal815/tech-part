import React from 'react';
import '../../styles/screens/citiesScreens/atlantaScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesBlogCardContainer from '../../components/globalComponents/CitiesBlogCardContainer';
import CitiesAboutPulsRepairService from '../../components/globalComponents/CitiesAboutPulsRepairService';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import CitiesCustomerReviewContainer from '../../components/globalComponents/CitiesCustomerReviewContainer';

const AtlantaScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'TechNPart.com', color: '#a1abb0' },
    { link: '/cities/ga', label: 'Georgia', color: '#a1abb0' },
    { link: '/cities/ga/atlanta', label: 'Atlanta', color: '#017aff' },
  ];
  return (
    <div className='atlantaScreen'>
      <CitiesLandingPage city='Atlanta' />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-70 container-y-25'>
        <CitiesMap
          mapImageRight
          city='Atlanta'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/atlanta.png'
        />
      </div>
      <div className='container-50'>
        <div className='center'>
          <h1 className='heading-1 mt-5 mb-3'>Services offered</h1>
          <h2 className='mb-5 paragraph'>Solutions to all your home maintenance needs</h2>
        </div>
      </div>
      <div className='container-60 mb-5'>
        <CitiesServicesCardContainer />
      </div>
      <CitiesAboutPulsRepairService city='Atlanta' />
      <div className='container-70 container-y-50'>
        <h1 className='heading-1 center my-5'>The TechNPart Blog</h1>
        <CitiesBlogCardContainer />
      </div>
      <CitiesCustomerReviewContainer city='Atlanta' />
    </div>
  );
};

export default AtlantaScreen;
