import React from 'react';
import '../../styles/components/globalComponents/featuredIn.scss';

import TwsjLogo from '../../assets/icons/brands-logo/twsj.svg';
import CnbcLogo from '../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../assets/icons/brands-logo/tc.svg';
import FortuneLogo from '../../assets/icons/brands-logo/fortune.svg';
import TnytLogo from '../../assets/icons/brands-logo/nytimes.svg';
import VenturebeatLogo from '../../assets/icons/brands-logo/venturebean.svg';

const FeaturedIn = ({ backgroundColor }) => {
  return (
    <div className='featuredIn' style={{ backgroundColor }}>
      <h2 className='heading-3'>Featured In:</h2>
      <div className='images-wrapper'>
        <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo' />
        <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
        <img src={TcLogo} alt='TcLogo' id='TcLogo' />
        <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
        <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
        <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
      </div>
    </div>
  );
};

export default FeaturedIn;
