import React from 'react';
// import '../../styles/components/globalComponents/citiesServicesCardContainer.scss';

import { Col, Row } from 'react-bootstrap';

import ServicesOfferedCard from './ServicesOfferedCard';

import HomeAppliancesImage from '../../assets/icons/services-icons/home-appliances.svg';
import TvMountingImage from '../../assets/icons/services-icons/tv-mounting.svg';
import HandymanImage from '../../assets/icons/services-icons/handyman.svg';
import IphoneRepairImage from '../../assets/icons/services-icons/iphone.svg';
import PlumbingImage from '../../assets/icons/services-icons/plumbing.svg';
import GarageDoorImage from '../../assets/icons/services-icons/garage.svg';

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
          <ServicesOfferedCard image={PlumbingImage} title='Plumbing' url='/services/plumbing' />
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
