import React from 'react';
import '../../styles/screens/citiesScreens/massachusettsScreen.scss';

import { ScrollToTop } from './../../utilities/index';
import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import CitiesCustomerReviewContainer from '../../components/globalComponents/CitiesCustomerReviewContainer';

const MassachusettsScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'TechNPart.com', color: '#a1abb0' },
    { link: '/cities/ma', label: 'Massachusetts', color: '#017aff' },
  ];
  return (
    <div className='massachusettsScreen'>
      <CitiesLandingPage
        city='Massachusetts'
        citiesLandingPageImage='https://s3.amazonaws.com/static.puls.com/website/SEO/Puls%20Day%201039%202.jpg'
      />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-50 mb-3'>
        <div className='center'>
          <h1 className='heading-1 mb-3'>Services offered</h1>
          <h2 className='mb-3 paragraph'>Solutions to all your home maintenance needs</h2>
        </div>
      </div>
      <div className='container-60'>
        <CitiesServicesCardContainer />
      </div>
      <div className='container-70 container-y-50'>
        <CitiesMap
          mapImageLeft
          city='Massachusetts'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/atlanta.png'
        />
      </div>
      <CitiesCustomerReviewContainer city='Massachusetts' />
    </div>
  );
};

export default MassachusettsScreen;
