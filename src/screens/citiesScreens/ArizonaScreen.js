import React from 'react';
import '../../styles/screens/citiesScreens/arizonaScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import CitiesCustomerReviewContainer from '../../components/globalComponents/CitiesCustomerReviewContainer';

const ArizonaScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'Puls.com', color: '#a1abb0' },
    { link: '/cities/az', label: 'Arizona', color: '#017aff' },
  ];
  return (
    <div className='arizonaScreen'>
      <CitiesLandingPage city='Arizona' />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-50 container-y-50'>
        <div className='center'>
          <h1 className='heading-1 mb-3'>Services offered</h1>
          <h2 className='mb-3'>Solutions to all your home maintenance needs</h2>
        </div>
      </div>
      <div className='container-60'>
        <CitiesServicesCardContainer />
      </div>
      <div className='container-70 container-y-50 city-map'>
        <CitiesMap
          right
          city='Arizona'
          imageUrl='https://s3.amazonaws.com/static.puls.com/website/SEO/Phoenix.jpg'
        />
      </div>
      <CitiesCustomerReviewContainer city='Arizona' />
    </div>
  );
};

export default ArizonaScreen;
