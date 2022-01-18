import React from 'react';
import '../../styles/components/globalComponents/topTechnicianYelpCardsSlider.scss';

import starsImg from '../../assets/icons/stars.svg';
import yelpImg from '../../assets/icons/yelp.svg';
import { Row, Col } from 'react-bootstrap';

const TopTechnicianYelpCardsSlider = ({ title }) => {
  const topTechnicianOptions = [
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/roshan.jpg`,
      name: `Roshan`,
      quote: `Techpart was quick, affordable, and extremely convenient! Roshan was my tech and he was great. Would 100% use Techpart again!`,
      reviewer: `Adrienne | Los Angeles, CA`,
    },
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/kevin.jpg`,
      name: `Kevin`,
      quote: `This is one of the best services around. Kevin, my tech, was punctual, courteous and efficient. Will definitely use Techpart again.`,
      reviewer: `Donnie | Colton, CA`,
    },
    {
      imageUrl: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/sam.jpeg`,
      name: `Sam`,
      quote: `I'm impressed at the efficiency of this company. Sam was a real MVP, super professional and friendly.`,
      reviewer: `Sriram | Houston, TX`,
    },
  ];

  const TopTechnicianYelpCard = ({ topTech }) => {
    const { imageUrl, name, quote, reviewer } = topTech;
    return (
      <div className='topTechnicianYelpCard'>
        <div className='profile-container'>
          <div className='profile'>
            <img src={imageUrl} alt='' />
            <div className='name'>
              <p>
                <b>{name}</b>{' '}
              </p>
              <p>Techpart technician</p>
            </div>
          </div>
          <div className='yelp-image'>
            <img src={yelpImg} alt='image' />
          </div>
        </div>
        <blockquote>"{quote}"</blockquote>

        <div className='stars-container'>
          <p>{reviewer}</p>
          <img src={starsImg} alt='image' />
        </div>
      </div>
    );
  };
  return (
    <div className='topTechnicianYelpCardsSlider my-5'>
      {title && <h1>{title}</h1>}
      <Row>
        {topTechnicianOptions &&
          topTechnicianOptions.map((topTech, i) => (
            <Col key={i} sm={12} md={6} lg={4}>
              <TopTechnicianYelpCard topTech={topTech} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default TopTechnicianYelpCardsSlider;
