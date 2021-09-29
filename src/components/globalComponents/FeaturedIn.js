import React from 'react';
import '../../styles/components/globalComponents/featuredIn.scss';

import TwsjLogo from '../../assets/icons/brands-logo/twsj.svg';
import CnbcLogo from '../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../assets/icons/brands-logo/tc.svg';
import FortuneLogo from '../../assets/icons/brands-logo/fortune.svg';
import TnytLogo from '../../assets/icons/brands-logo/nytimes.svg';
import VenturebeatLogo from '../../assets/icons/brands-logo/venturebean.svg';

const FeaturedIn = () => {
  return (

    <div className="container-75 featured-in-section">
      <div className="container">
        <div className="row">
          <div className='col-md-12 col-12'>
            <h2 className='heading-3'>Featured In</h2>
            <div className='images-wrapper row'>
              <div className='col-md-3 col-sm-12'>
                <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo' />
              </div>
              <div className='col-md-3 col-sm-12'>
                <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
              </div>
              <div className='col-md-3 col-sm-12'>
                <img src={TcLogo} alt='TcLogo' id='TcLogo' />
              </div>
              <div className='col-md-3 col-sm-12'>
                <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
              </div>
              <div className='col-md-3 col-sm-12'>
                <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
              </div>
              <div className='col-md-3 col-sm-12'>
                <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
