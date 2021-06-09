import React from 'react';
// import '../../styles/components/globalComponents/citiesServicesCardContainer.scss';

import { Col, Row } from 'react-bootstrap';

import ServicesOfferedCard from './ServicesOfferedCard';

import HomeAppliancesImage from '../../assets/icons/hover/home-appliances_hover.svg';
import TvMountingImage from '../../assets/icons/hover/tv-mounting-hover.svg';
import HandymanImage from '../../assets/icons/hover/handyman-hover.svg';
import IphoneRepairImage from '../../assets/icons/hover/phone_hover.svg';
import PlumbingImage from '../../assets/icons/hover/plumbing-hover.svg';
import GarageDoorImage from '../../assets/icons/hover/garage-doors-hover.svg';

const CitiesServicesCardContainer = () => {
  return (
    <div className='citiesServicesCardContainer'>
      <Row>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={HomeAppliancesImage}
            title='Home Appliances Repair'
            url='/services/home-appliances'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={TvMountingImage}
            title='Tv Mounting'
            url='/services/tv-mounting'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={HandymanImage}
            title='Handyman Services'
            url='/services/handyman'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={IphoneRepairImage}
            title='iPhone Repair'
            url='/services/iphone-repair'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={PlumbingImage}
            title='Plumbing'
            url='/services/plumbing'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='center'>
          <ServicesOfferedCard
            image={GarageDoorImage}
            title='Garage Door'
            url='/services/garage-door-repair'
          />
        </Col>
      </Row>
    </div>
  );
};

export default CitiesServicesCardContainer;
