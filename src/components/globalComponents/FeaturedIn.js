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
<div className="container-75 featured-in-section">
<div className="container">
  <div className="row">
    <div className='col-md-12 col-12'>
      <h2 className='heading-3'>Featured In</h2>
      <Row className='images-wrapper'>
          <Col sm={12} md={3} lg={3}>
            <img src={TwsjLogo} alt='TwsjLogo' id='TwsjLogo'/>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img src={CnbcLogo} alt='CnbcLogo' id='CnbcLogo' />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img src={TcLogo} alt='TcLogo' id='TcLogo' />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img src={FortuneLogo} alt='FortuneLogo' id='FortuneLogo' />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img src={TnytLogo} alt='TnytLogo' id='TnytLogo' />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <img src={VenturebeatLogo} alt='VenturebeatLogo' id='VenturebeatLogo' />
          </Col>
        </Row>
        </div>
        </div>
    </div>
    </div>
  );
};

export default FeaturedIn;
