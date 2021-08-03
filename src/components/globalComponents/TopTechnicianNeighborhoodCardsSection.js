import React from 'react';
import '../../styles/components/globalComponents/topTechnicianNeighborhoodCardsSection.scss';
import { Row, Col } from 'react-bootstrap';

const TopTechnicianNeighborhoodCardsSection = ({ screen }) => {
  const topTechnicianNeighborhoodCardInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/ben.jpeg`,
      name: `Ben`,
      job: `Phone repair`,
      title: `Saved the day!`,
      introduction: `Fun Valentines Day and a broken cell phone screen. I made the appointment at midnight and at 8:55am Ben was here to fix the phone. 20 minutes later my shattered phone is repaired and I have new tempered glass. No upcharges and you pay for the work once it is completed. Service was polite, friendly, and I shall never be that careless again! They truly saved the day!`,
      location: `Adrienne | Los Angeles, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp.png`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/sam.jpeg`,
      name: `Sam`,
      job: `Phone repair`,
      title: `A real MVP`,
      introduction: `I'm impressed at the efficiency of this company. If it were truly an emergency, Puls would be a real lifesaver. ... Sam was a real MVP, super professional and friendly and fixed me up in no time.`,
      location: `Donnie | Colton, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp.png`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/rob.jpeg`,
      name: `Robert`,
      job: `TV Mounting`,
      title: `1 hour & happy!`,
      introduction: `I struggled with fixing a wall mount until I Googled 'Houston TV mounting' and booked Puls. Robert showed up at 3 and was done by 4. Very courteous and fast. Highly recommended`,
      location: `Sriram | Houston, TX`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/facebook-water.svg`,
    },
  ];
  const topTechnicianNeighborhoodCardInfoBusiness = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/stephen.png`,
      title: `Great experience`,
      introduction: `Had a 70" TV mounted and the installer arrived early and had the TV mounted within 30 minutes! Very quick and he knew exactly what he was doing. Great experience.`,
      location: `Stephen | Los Angeles, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/facebook-water.svg`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/jazmyn.png`,
      title: `Ten minutes and done!`,
      introduction: `I dropped my iPhone yesterday going to lunch at my new job (can't take off so soon to handle something like this) so I found Puls. They took 10 minutes to fix my phone! I could have [traveled] across town and waited an hour - no thanks.`,
      location: `Jazmyn | San Francisco`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp.png`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/technicians/brian.png`,
      title: `Quick and quiet`,
      introduction: `I love the convenience of their mobile technicians, they work quietly, quickly, and when they came to my office I didn't even notice they were here.`,
      location: `Brian | Santa Barbara, CA`,
      logo: `https://d7gh5vrfihrl.cloudfront.net/website/badges/facebook-water.svg`,
    },
  ];

  const TopTechnicianNeighborhoodCard = ({ cardInfo }) => {
    const { image, name, job, title, introduction, location, logo } = cardInfo;
    return (
      <div className='topTechnicianNeighborhoodCard'>
        {screen === 'pulsForBusiness' ? (
          <div
            className='image-container center'
            style={{ width: '220px', height: '220px', margin: '0 auto' }}
          >
            <img src={image} alt='image' />
          </div>
        ) : (
          <div className='image-container'>
            <img src={image} alt='image' />
            <div className='image-title'>
              <h6>{name}</h6>
              <p>{job}</p>
            </div>
          </div>
        )}

        <div className='content-container center'>
          {screen === 'pulsForBusiness' ? (
            <h6 style={{ fontFamily: 'RobotoBold', color: '#000' }}>"{title}"</h6>
          ) : (
            <h6>{title}</h6>
          )}

          <p className='description'>"{introduction}"</p>
          <img
            className='five-stars'
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/stars.svg'
            alt='five-stars'
          />
          <p className='location'>{location}</p>
          <img className='yelp-facebook' src={logo} alt='logo' />
        </div>
      </div>
    );
  };
  return (
    <div className='topTechnicianNeighborhoodCardsSection'>
      <Row>
        {screen !== 'pulsForBusiness'
          ? topTechnicianNeighborhoodCardInfo.map((cardInfo, i) => (
              <Col key={i} sm={12} md={4}>
                <TopTechnicianNeighborhoodCard cardInfo={cardInfo} />
              </Col>
            ))
          : topTechnicianNeighborhoodCardInfoBusiness.map((cardInfo, i) => (
              <Col key={i} sm={12} md={4}>
                <TopTechnicianNeighborhoodCard cardInfo={cardInfo} />
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default TopTechnicianNeighborhoodCardsSection;
