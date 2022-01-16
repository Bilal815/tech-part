import React from 'react';
import '../../styles/components/globalComponents/featuredIn.scss';
import { Row, Col } from 'react-bootstrap';

import TwsjLogo from '../../assets/icons/brands-logo/twsj.svg';
import CnbcLogo from '../../assets/icons/brands-logo/cnbc.svg';
import TcLogo from '../../assets/icons/brands-logo/tc.svg';
import FortuneLogo from '../../assets/icons/brands-logo/fortune.svg';
import TnytLogo from '../../assets/icons/brands-logo/nytimes.svg';
import VenturebeatLogo from '../../assets/icons/brands-logo/venturebean.svg';

const FeaturedIn = () => {
  return (
    <div className='featuredIn'>
      <h2 className='container-75 heading-3'>Featured In</h2>
      <div className='container-75'>
      <Row className='images-wrapper'>
          <Col sm={6} md={6} lg={3}>
            <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo' style={{width:"230px"}}/>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <img src={TcLogo} alt='TcLogo' id='TcLogo' />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
          </Col>
        </Row>
        <Row className='images-wrapper'>
          <Col sm={6} md={6} lg={3}>
            <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
          </Col>
          <Col sm={6} md={6} lg={3}>
            <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
          </Col>
        </Row>
        </div>
      {/* <div className='images-wrapper'>
       <div className='container-75'>
         <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo' />
         <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
         <img src={TcLogo} alt='TcLogo' id='TcLogo' />
         <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
         <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
         <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
       </div>
      </div> */}
    </div>
  );
};

export default FeaturedIn;
