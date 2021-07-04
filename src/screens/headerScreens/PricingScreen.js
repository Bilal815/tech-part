import React from 'react';
import '../../styles/screens/headerScreens/pricingScreen.scss';
import { ScrollToTop } from './../../utilities/index';

import PricingContainer from './../../components/globalComponents/PricingContainer';

const PricingScreen = () => {
  ScrollToTop();
  return (
    <div className='pricingScreen'>
      <div className='container-65'>
        <PricingContainer />
      </div>
    </div>
  );
};

export default PricingScreen;
