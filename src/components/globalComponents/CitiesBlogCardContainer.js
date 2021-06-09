import React from 'react';

import { Col, Row } from 'react-bootstrap';

import BlogCard from './BlogCard';

const CitiesBlogCardContainer = () => {
  return (
    <div className='citiesBlogCardContainer'>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <BlogCard
            image='https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1226601253.jpg'
            title='
            Summer Season Maintenance You Need for Your Appliances'
            description='Todays appliances are so reliable that you rarely want to buy...'
            blogUrl='/'
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <BlogCard
            image='https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_643473778.png'
            title='5 Smart Home Tips to Kick Your Summer BBQ Up a Notch'
            description='We’ve got some tech-driven summer bbq tips that will...'
            blogUrl='/'
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <BlogCard
            image='https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1156209073.jpg'
            title='Tips for Keeping Your Home’s Electrical System Safe'
            description='Electricity is an essential element in your home that...'
            blogUrl='/'
          />
        </Col>
      </Row>
    </div>
  );
};

export default CitiesBlogCardContainer;
