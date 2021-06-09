import React from 'react';
import '../../styles/screens/citiesScreens/arizonaScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import CitiesLandingPage from './../../components/globalComponents/CitiesLandingPage';
import CitiesServicesCardContainer from '../../components/globalComponents/CitiesServicesCardContainer';
import CitiesBlogCardContainer from '../../components/globalComponents/CitiesBlogCardContainer';
import CitiesAboutPulsRepairService from '../../components/globalComponents/CitiesAboutPulsRepairService';
import CitiesMap from '../../components/globalComponents/CitiesMap';
import CitiesBreadCrumb from '../../components/globalComponents/CitiesBreadCrumb';
import Review from '../../components/globalComponents/Review';

const ArizonaScreen = () => {
  ScrollToTop();
  const breadcrumbList = [
    { link: '/', label: 'Puls.com', color: '#a1abb0' },
    { link: '/cities/az', label: 'Arizona', color: '#017aff' },
  ];
  return (
    <div className='arizonaScreen'>
      <CitiesLandingPage />
      <CitiesBreadCrumb breadcrumbList={breadcrumbList} />
      <div className='container-50 container-y-50'>
        <div className='center'>
          <h1 className='heading-1 mt-5 mb-3'>Services offered</h1>
          <h2 className='mb-5'>Solutions to all your home maintenance needs</h2>
        </div>
        <CitiesServicesCardContainer />
      </div>
      <div className='container-70 container-y-50 city-map'>
        <CitiesMap right />
      </div>
      {/* <CitiesAboutPulsRepairService /> */}
      {/* <div className='container-70 container-y-50'>
        <h1 className='heading-1 center my-5'>The Puls Blog</h1>
        <CitiesBlogCardContainer />
      </div> */}
      <Review />
    </div>
  );
};

export default ArizonaScreen;
