import React from 'react';
import '../../styles/components/globalComponents/featuredIn.scss';

import TwsjLogo from '../../assets/icons/brands-logo/twsj.svg';
import CnbcLogo from '../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../assets/icons/brands-logo/tc.svg';
import FortuneLogo from '../../assets/icons/brands-logo/fortune.svg';
import TnytLogo from '../../assets/icons/brands-logo/nytimes.svg';
import VenturebeatLogo from '../../assets/icons/brands-logo/venturebean.svg';

const FeaturedIn = ({ backgroundColor, logos }) => {
  return (
    <div className='featuredIn'>
      <h2 className='container-75 heading-3'>Featured In</h2>
      <div
        className='images-wrapper'
        style={{ backgroundColor, padding: `${backgroundColor ? '50px 0' : ''}` }}
      >
        <div className='container-75'>
          {logos ? (
            logos.map((logo, i) => <img key={i} src={logo} alt='logo' />)
          ) : (
            <>
              <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo' />
              <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
              <img src={TcLogo} alt='TcLogo' id='TcLogo' />
              <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
              <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
              <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
