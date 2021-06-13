import React from 'react';
import '../../styles/screens/citiesScreens/losAngelesScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesBlogCardContainer from '../../components/globalComponents/CitiesBlogCardContainer';
import CitiesAboutPulsRepairService from '../../components/globalComponents/CitiesAboutPulsRepairService';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import CitiesCustomerReviewContainer from '../../components/globalComponents/CitiesCustomerReviewContainer';

const LosAngelesScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'Puls.com', color: '#a1abb0' },
    { link: '/cities/ca', label: 'California', color: '#a1abb0' },
    { link: '/cities/ca/los-angeles', label: 'Los Angeles', color: '#017aff' },
  ];
  return (
    <div className='losAngelesScreen'>
      <CitiesLandingPage city='Los Angeles' />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-70 container-y-50 city-map'>
        <CitiesMap
          left
          city='Los Angeles'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/Phoenix.jpg'
        />
      </div>
      <div className='container-50 container-y-50'>
        <div className='center'>
          <h1 className='heading-1 mt-5 mb-3'>Services offered</h1>
          <h2 className='mb-5'>Solutions to all your home maintenance needs</h2>
        </div>
      </div>
      <div className='container-60 mb-5'>
        <CitiesServicesCardContainer />
      </div>
      <CitiesAboutPulsRepairService city='Los Angeles' />
      <div className='container-70 container-y-50'>
        <h1 className='heading-1 center my-5'>The Puls Blog</h1>
        <CitiesBlogCardContainer />
      </div>
      <CitiesCustomerReviewContainer city='Los Angeles' />
    </div>
  );
};

export default LosAngelesScreen;
