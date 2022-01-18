import React from 'react';
import '../../styles/screens/headerScreens/pricingScreenOld.scss';
import { ScrollToTop } from './../../utilities/index';

import PricingContainer from './../../components/globalComponents/PricingContainer';

const PricingScreenOld = () => {
  ScrollToTop();
  return (
    <div className='pricingScreen'>
      <div className='container-65'>
        <PricingContainer />
      </div>
    </div>
  );
};

export default PricingScreenOld;
