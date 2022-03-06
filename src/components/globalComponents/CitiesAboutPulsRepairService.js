import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Button } from '../../styledComponents';

import '../../styles/components/globalComponents/citiesAboutPulsRepairService.scss';

const CitiesAboutPulsRepairService = ({
  history,
  city,
  title,
  d1,
  d2,
  p,
  d3,
  d4,
  image,
  btnLink,
}) => {
  return (
    <div className='citiesAboutPulsRepairService'>
      <div className='container-75 container-y-75'>
        <h1 className='heading-1 my-5 center'>About TechNPart {city} repair services</h1>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <div className='content-wrapper'>
              <p>
                As one of the largest and fastest growing cities in the western United States,
                Phoenix residents are used to busy schedules. Whether they’re heading to their
                high-tech Intel job in Chandler, making airplanes at Boeing in Mesa, or heading on a
                business trip from the fifth largest airport in the nation, Phoenix Sky Harbor
                Airport in Tempe, there’s no time to waste when your important devices break down.
              </p>
              <p>
                If you’re stuck with a malfunctioning device, there’s no need to panic - TechNPart has
                your back. We offer convenient repair services throughout the greater Phoenix area
                and will be at your home when it suits your schedule best - even as soon same-day.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className='image-wrapper'>
              <img
                src='https://s3.amazonaws.com/static.puls.com/website/SEO/Ring%20Security%202.JPG'
                alt='about-TechNPart'
              />
            </div>
          </Col>
        </Row>

        <div className='center-paragraphs container-65'>
          <div className='book-today fe'>
            <span>Book Puls easily online or by phone today.</span>
          </div>
          <p className='center'>
            Our expert technicians can repair your smartphone, fix your plumbing, troubleshoot and
            resolve an appliance problem, and even take care of your garage door issues. Need a TV
            mounted on the wall to watch the Cardinals or Coyotes game in style? We can handle that
            for you, too.
          </p>
          <p className='center'>
            ﻿Appointments are available every day from 8 a.m. to 10 p.m., including all weekends and
            holidays. Schedule a service online or give us a call today today and a Puls technician
            will be at your door when it suits you best, to get your device working properly in no
            time.
          </p>
          <div className='center'>
            <Button onClick={() => history.push(`${btnLink ? btnLink : '/'}`)}>
              Book an appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CitiesAboutPulsRepairService);
