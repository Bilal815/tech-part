import React from 'react';
import '../../styles/screens/citiesScreens/californiaScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import CitiesCustomerReviewContainer from '../../components/globalComponents/CitiesCustomerReviewContainer';

const CaliforniaScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'TechNPart.com', color: '#a1abb0' },
    { link: '/cities/ca', label: 'California', color: '#017aff' },
  ];
  return (
    <div className='californiaScreen'>
      <CitiesLandingPage
        city='California'
        citiesLandingPageImage='https://s3.amazonaws.com/static.puls.com/website/SEO/Puls%20Day%201039%202.jpg'
      />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-50 container-y-50'>
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
          city='San Francisco'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/la_map@3x.png'
        />
      </div>
      <div className='container-70 container-y-50'>
        <CitiesMap
          mapImageRight
          city='Los Angeles'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/la_map@3x.png'
        />
      </div>
      <div className='container-70 container-y-50'>
        <CitiesMap
          mapImageLeft
          city='San Diego'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/la_map@3x.png'
        />
      </div>

      <CitiesCustomerReviewContainer city='CCalifornia' />
    </div>
  );
};

export default CaliforniaScreen;
