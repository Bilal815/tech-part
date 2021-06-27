import React, { useState } from 'react';
import '../../styles/screens/headerScreens/becomeATechScreen.scss';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

import { ScrollToTop } from './../../utilities/index';
import VideoLandingSection from './../../components/globalComponents/VideoLandingSection';
import video from '../../assets/video.mp4';
import WhyJoinOurTeamPoints from './../../components/globalComponents/WhyJoinOurTeamPoints';
import { LinkButton } from '../../styledComponents';
import TechnicianReviewsCard from '../../components/globalComponents/TechnicianReviewsCard';
import Video1 from '../../assets/videos/video1.mp4';

const BecomeATechScreen = () => {
  ScrollToTop();

  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const hovered1 = `${isHovered1 ? 'scale(1.2)' : 'scale(1)'}`;
  const hovered2 = `${isHovered2 ? 'scale(1.2)' : 'scale(1)'}`;
  const hovered3 = `${isHovered3 ? 'scale(1.2)' : 'scale(1)'}`;
  const hovered4 = `${isHovered4 ? 'scale(1.2)' : 'scale(1)'}`;

  const mouseHover = (id) => {
    if (id === 1) {
      setIsHovered1(true);
    } else if (id === 2) {
      setIsHovered2(true);
    } else if (id === 3) {
      setIsHovered3(true);
    } else {
      setIsHovered4(true);
    }
  };
  const mouseOut = (id) => {
    if (id === 1) {
      setIsHovered1(false);
    } else if (id === 2) {
      setIsHovered2(false);
    } else if (id === 3) {
      setIsHovered3(false);
    } else {
      setIsHovered4(false);
    }
  };

  const [points, setPoints] = useState([
    {
      title: `Build your own schedule`,
      description: `Work on the weekends or every day of the week. It's up to you!`,
    },
    {
      title: `Competitive, reliable pay`,
      description: `Get paid three times a week via direct deposit to your bank account. Earn up to $60 per hour.`,
    },
    {
      title: `Make someone's day`,
      description: `You'll make repairs and installations effortless, and customers will love you for it.`,
    },
  ]);

  const [applyTodayOptions, setApplyTodayOptions] = useState([
    {
      id: 1,
      img: `https://d7gh5vrfihrl.cloudfront.net/website/services/handyman.png`,
      name: `Handyman Services`,
      url: `https://info.puls.com/application-handy`,
    },
    {
      id: 2,
      img: `https://d7gh5vrfihrl.cloudfront.net/website/services/smart-home.svg`,
      name: `Smart Phone Setup`,
      url: `https://info.puls.com/join-as-a-tech`,
    },
    {
      id: 3,
      img: `https://d7gh5vrfihrl.cloudfront.net/website/services/plumbing.svg`,
      name: `Plumbing Service`,
      url: `https://info.puls.com/application-plumbing`,
    },
    {
      id: 4,
      img: `https://d7gh5vrfihrl.cloudfront.net/website/services/phone-tablet.svg`,
      name: `Phone and Tablet Repair`,
      url: `https://info.puls.com/application-phone`,
    },
  ]);

  const [joinUsOptions, setJoinUsOptions] = useState([
    `Experience in repairs and/or installations`,
    `Authorized to work in the United States`,
    `Access to reliable transportation`,
    `Passionate about helping others`,
  ]);

  const ApplyTodaySection = () => {
    return (
      <div className='apply-today-section'>
        <div className='container-80'>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className='inner-section'>
                <a
                  className='center'
                  onMouseOver={() => setIsHoveredLeft(true)}
                  onMouseOut={() => setIsHoveredLeft(false)}
                  href='https://info.puls.com/application-tv'
                  target='_blank'
                >
                  <img
                    style={{
                      transform: `${isHoveredLeft ? 'scale(1.2)' : 'scale(1)'}`,
                      transition: '0.8s',
                    }}
                    src='https://d7gh5vrfihrl.cloudfront.net/website/services/tv.svg'
                    alt='image'
                  />
                  <p className='mt-3'>TV Mounting</p>
                </a>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='cotent'>
                <h1 className='center'>
                  <p className='m-0'>Apply today.</p>
                  <p className='m-0'>Start earning tomorrow.</p>
                </h1>
                <p className='m-0 center'>Click on your area of expertise to get started.</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className='inner-section'>
                <a
                  className='center'
                  onMouseOver={() => setIsHoveredRight(true)}
                  onMouseOut={() => setIsHoveredRight(false)}
                  href='https://info.puls.com/application-appliance'
                  target='_blank'
                >
                  <img
                    style={{
                      transform: `${isHoveredRight ? 'scale(1.2)' : 'scale(1)'}`,
                      transition: '0.8s',
                    }}
                    src='https://d7gh5vrfihrl.cloudfront.net/website/services/appliance.svg'
                    alt='image'
                  />
                  <p className='mt-3'>Appliances Repair</p>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            {applyTodayOptions &&
              applyTodayOptions.map((item, i) => (
                <>
                  {item.url && (
                    <Col key={i} sm={12} md={6} lg={3} className='center'>
                      <div className='inner-section'>
                        <a
                          className='center'
                          onMouseOver={() => mouseHover(item.id)}
                          onMouseOut={() => mouseOut(item.id)}
                          href={item.url}
                          target='_blank'
                        >
                          {item.img && (
                            <img
                              style={{
                                transform: `${
                                  item.id === 1
                                    ? hovered1
                                    : item.id === 2
                                    ? hovered2
                                    : item.id === 3
                                    ? hovered3
                                    : item.id === 4
                                    ? hovered4
                                    : null
                                }`,
                                transition: '0.8s',
                              }}
                              src={item.img}
                              alt='image'
                            />
                          )}
                          {item.name && <p className='mt-3'>{item.name}</p>}
                        </a>
                      </div>
                    </Col>
                  )}
                </>
              ))}
          </Row>
        </div>
      </div>
    );
  };

  const TechnicianReviewsCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      centerPadding: '60px',
      className: 'center',
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      },
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true,
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      // ],
    };
    return (
      <Slider {...settings}>
        <div className='d-flex mb-5'>
          <TechnicianReviewsCard
            review=' Working with Puls has always been a fun experience - great pay, the ability to make
                my own schedule, and plenty of opportunities to grow!'
            name='Malek'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/malek.jpg'
          />
          <TechnicianReviewsCard
            review=' Working with Puls has always been a fun experience - great pay, the ability to make
                my own schedule, and plenty of opportunities to grow!'
            name='Malek'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/malek.jpg'
          />
        </div>
        <div className='d-flex mb-5'>
          <TechnicianReviewsCard
            review={`I ran a garage repair business before joining Puls, and I have nothing but the best to say about the support I've received at Puls. I can't praise Puls enough!`}
            name='Tim'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/tim.jpg'
          />
          <TechnicianReviewsCard
            review=' Working with Puls has always been a fun experience - great pay, the ability to make
                my own schedule, and plenty of opportunities to grow!'
            name='Malek'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/malek.jpg'
          />
        </div>
        <div className='d-flex mb-5'>
          <TechnicianReviewsCard
            review={`Becoming a Puls technician gave me the ability to manage a busier schedule with higher earnings. The team always has my back.`}
            name='Daniel'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/daniel.jpg'
          />
          <TechnicianReviewsCard
            review=' Working with Puls has always been a fun experience - great pay, the ability to make
                my own schedule, and plenty of opportunities to grow!'
            name='Malek'
            image='https://d7gh5vrfihrl.cloudfront.net/website/technicians/malek.jpg'
          />
        </div>
      </Slider>
    );
  };

  return (
    <div className='becomeATechScreen'>
      <VideoLandingSection
        // videoUrl={video}
        // videoUrl={'https://d7gh5vrfihrl.cloudfront.net/website/videos/tech_banner.mp4'}
        imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/banners/new-membership-desktop.png'
        title='Do the work you love'
        description='Let us handle the rest. It’s that easy!'
        btnTitle='Apply Now'
        btnLink='https://lp.puls.com/join-as-a-tech'
      />
      <div className='container-80'>
        <div className='center'>
          <h1 className='center-light-heading-margin'>Why join our team ?</h1>
          <WhyJoinOurTeamPoints points={points} />
        </div>
      </div>
      <ApplyTodaySection />
      <div className='technician-app-section'>
        <div className='inner-blue-background-wrapper'>
          <div className='container-85'>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <div className='content-wrapper mt-3'>
                  <h1>
                    The Puls Technician App <br />
                    makes your job effortless
                  </h1>
                  <p>
                    Pick and choose the jobs you want. We bring jobs <br /> to you and make it easy
                    to coordinate your schedule, <br /> so you can focus on more important stuff.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className='image-wrapper center'>
                  <img
                    src='https://d7gh5vrfihrl.cloudfront.net/website/banners/double-phone.png'
                    alt='banner-mobile-image'
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='technicians-enjoy-section'>
        <div className='container-80 center'>
          <h1 className='center-light-heading m-0'>
            See why Puls technicians enjoy <br />
            working with us
          </h1>
          <div className='video-player-section'>
            <ReactPlayer
              width={700}
              height={400}
              controls
              url={Video1}
              // url='https://d7gh5vrfihrl.cloudfront.net/website/videos/testimonial.mp4'
            />
          </div>
        </div>
      </div>
      <div className='technicians-review-section'>
        <TechnicianReviewsCarousel />
      </div>
      <div className='join-us-section'>
        <div className='container-80'>
          <h1 className='center-light-heading m-0'>Do you have what it takes to join us?</h1>
          <div className='container-70'>
            <Row>
              {joinUsOptions &&
                joinUsOptions.map((item, i) => (
                  <Col sm={12} md={6} lg={6}>
                    <div className='aic mb-3'>
                      <img
                        className='mr-1'
                        src='https://d7gh5vrfihrl.cloudfront.net/website/bullets/brush-stroke-horizontal.svg'
                        alt='print-image'
                      />
                      <p className='m-0'>{item}</p>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
          <LinkButton link='https://lp.puls.com/join-as-a-tech' name='Apply Now' />
        </div>
      </div>
    </div>
  );
};

export default BecomeATechScreen;
