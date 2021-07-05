import React from 'react';
import '../../styles/components/globalComponents/beatPulsBlodCardsSlider.scss';

import { Row, Col } from 'react-bootstrap';
import BeatPulsBlogCard from './BeatPulsBlogCard';

const BeatPulsBlogCardsSlider = () => {
  const beatPulsBlogOptions = [
    {
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_756122107.jpg`,
      title: `The Right Season for Interior Painting & Cost Breakdown`,
      description: `If your walls can use a new coat of paint, you...`,
      date: `June 2021`,
    },
    {
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1226601253.jpg`,
      title: `Summer Season Maintenance You Need for Your Appliances`,
      description: `Today's appliances are so reliable that you rarely...`,
      date: `June 2021`,
    },
    {
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_643473778.png`,
      title: `5 Smart Home Tips to Kick Your Summer BBQ Up a Notch`,
      description: `We’ve got some tech-driven summer bbq tips that...`,
      date: `June 2021`,
    },

    {
      imageUrl: `https://f.hubspotusercontent10.net/hubfs/4039866/shutterstock_1156209073.jpg`,
      title: `Tips for Keeping Your Home’s Electrical System Safe`,
      description: `Electricity is an essential element in your home...`,
      date: `April 2021`,
    },
  ];
  return (
    <div className='beatPulsBlodCardsSlider my-5'>
      <h1>The beat - the Puls blog</h1>
      <Row>
        {beatPulsBlogOptions &&
          beatPulsBlogOptions.map((blog, i) => (
            <Col key={i} sm={12} md={6} lg={3}>
              <BeatPulsBlogCard blog={blog} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default BeatPulsBlogCardsSlider;
