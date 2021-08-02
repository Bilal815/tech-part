import React, { useState } from 'react';
import '../../styles/components/globalComponents/servicesHoverCardsGrid.scss';

import { Tooltip } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import tvMounting from '../../assets/icons/services/tv-mounting.svg';
import homeAppliances from '../../assets/icons/services/home-appliances.svg';
import handymanServices from '../../assets/icons/services/handyman-services.svg';
import disinfection from '../../assets/icons/services/disinfection.svg';
import iPhone from '../../assets/icons/services/phone.svg';
import smartHome from '../../assets/icons/services/smart-home.svg';
import garageDoors from '../../assets/icons/services/garage-doors.svg';
import plumbing from '../../assets/icons/services/plumbing.svg';

import disinfectionHover from '../../assets/icons/hover/disinfection-hover.svg';
import garageDoorsHover from '../../assets/icons/hover/garage-doors-hover.svg';
import handymanServicesHover from '../../assets/icons/hover/handyman-hover.svg';
import homeAppliancesHover from '../../assets/icons/hover/home-appliances_hover.svg';
import iPhoneHover from '../../assets/icons/hover/phone_hover.svg';
import plumbingHover from '../../assets/icons/hover/plumbing-hover.svg';
import smartHomeHover from '../../assets/icons/hover/smart-home-hover.svg';
import tvMountingHover from '../../assets/icons/hover/tv-mounting-hover.svg';

import camera from '../../assets/smart-home-regular-images/security-camera.svg';
import doorbell from '../../assets/smart-home-regular-images/doorbell.svg';
import thermostat from '../../assets/smart-home-regular-images/thermostat.svg';
import speaker from '../../assets/smart-home-regular-images/speaker.svg';
import lock from '../../assets/smart-home-regular-images/lock.svg';
import garage from '../../assets/smart-home-regular-images/garage.svg';
import theater from '../../assets/smart-home-regular-images/theater.svg';
import wifi from '../../assets/smart-home-regular-images/wifi.svg';

import cameraHover from '../../assets/smart-home-hover-images/security-camera.svg';
import doorbellHover from '../../assets/smart-home-hover-images/doorbell.svg';
import thermostatHover from '../../assets/smart-home-hover-images/thermostat.svg';
import speakerHover from '../../assets/smart-home-hover-images/speaker.svg';
import lockHover from '../../assets/smart-home-hover-images/lock.svg';
import garageHover from '../../assets/smart-home-hover-images/garage.svg';
import theaterHover from '../../assets/smart-home-hover-images/theater.svg';
import wifiHover from '../../assets/smart-home-hover-images/wifi.svg';

const ServicesHoverCardsGrid = ({ screen }) => {
  console.log('screen : ', screen);

  const [tvMountingSrc, setTvMountingSrc] = useState(tvMounting);
  const [homeAppliancesSrc, setHomeAppliancesSrc] = useState(homeAppliances);
  const [handymanServicesSrc, setHandymanServicesSrc] = useState(handymanServices);
  const [disinfectionSrc, setDisinfectionSrc] = useState(disinfection);
  const [iPhoneSrc, setPhoneSrc] = useState(iPhone);
  const [smartHomeSrc, setSmartHomeSrc] = useState(smartHome);
  const [garageDoorsSrc, setGarageDoorsSrc] = useState(garageDoors);
  const [plumbingSrc, setPlumbingSrc] = useState(plumbing);

  const [imageCard1, setImageCard1] = useState(camera);
  const [imageCard2, setImageCard2] = useState(doorbell);
  const [imageCard3, setImageCard3] = useState(thermostat);
  const [imageCard4, setImageCard4] = useState(speaker);
  const [imageCard5, setImageCard5] = useState(lock);
  const [imageCard6, setImageCard6] = useState(garage);
  const [imageCard7, setImageCard7] = useState(theater);
  const [imageCard8, setImageCard8] = useState(wifi);

  const servicesCardOptionsHome = [
    {
      id: 1,
      tooltipTitle: `Let us do the heavy lifting for your new TV`,
      image: tvMountingSrc,
      imageHover: tvMountingHover,
      title: `TV, Mounting`,
      path: ``,
    },
    {
      id: 2,
      tooltipTitle: `Repairs for your dishwasher, fridge, oven, washer and more`,
      image: homeAppliancesSrc,
      imageHover: homeAppliancesHover,
      title: `Home, Appliances`,
      path: ``,
    },
    {
      id: 3,
      tooltipTitle: `Handyman services made simple`,
      image: handymanServicesSrc,
      imageHover: handymanServicesHover,
      title: `Handyman, Services`,
      path: ``,
    },
    {
      id: 4,
      tooltipTitle: `Minimize viruses and bacteria by surface disinfection`,
      image: disinfectionSrc,
      imageHover: disinfectionHover,
      title: `Disinfection, Services`,
      path: ``,
    },
    {
      id: 5,
      tooltipTitle: `Fix your phone at your home, office, or wherever you prefer`,
      image: iPhoneSrc,
      imageHover: iPhoneHover,
      title: `iPhone, Repair`,
      path: ``,
    },
    {
      id: 6,
      tooltipTitle: `Customize your connected home with expert setup and integration`,
      image: smartHomeSrc,
      imageHover: smartHomeHover,
      title: `Smart Home, Installation`,
      path: ``,
    },
    {
      id: 7,
      tooltipTitle: `Repair or replace your garage door.`,
      image: garageDoorsSrc,
      imageHover: garageDoorsHover,
      title: `Garage Door, Repair`,
      path: ``,
    },
    {
      id: 8,
      tooltipTitle: `Plumbing solutions for your faucets, sinks, drains and more`,
      image: plumbingSrc,
      imageHover: plumbingHover,
      title: `Plumbing, Services`,
      path: ``,
    },
  ];

  const mouseHoverHome = (id) => {
    if (id === 1) {
      setTvMountingSrc(tvMountingHover);
    } else if (id === 2) {
      setHomeAppliancesSrc(homeAppliancesHover);
    } else if (id === 3) {
      setHandymanServicesSrc(handymanServicesHover);
    } else if (id === 4) {
      setDisinfectionSrc(disinfectionHover);
    } else if (id === 5) {
      setPhoneSrc(iPhoneHover);
    } else if (id === 6) {
      setSmartHomeSrc(smartHomeHover);
    } else if (id === 7) {
      setGarageDoorsSrc(garageDoorsHover);
    } else {
      setPlumbingSrc(plumbingHover);
    }
  };
  const mouseOutHome = (id) => {
    if (id === 1) {
      setTvMountingSrc(tvMounting);
    } else if (id === 2) {
      setHomeAppliancesSrc(homeAppliances);
    } else if (id === 3) {
      setHandymanServicesSrc(handymanServices);
    } else if (id === 4) {
      setDisinfectionSrc(disinfection);
    } else if (id === 5) {
      setPhoneSrc(iPhone);
    } else if (id === 6) {
      setSmartHomeSrc(smartHome);
    } else if (id === 7) {
      setGarageDoorsSrc(garageDoors);
    } else {
      setPlumbingSrc(plumbing);
    }
  };

  const servicesCardOptionsSmartHome = [
    {
      id: 1,
      tooltipTitle: `Maximize your security both indoors and outdoors`,
      image: camera,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/security-camera.svg`,
      title: `Wireless, Security camera`,
      path: ``,
    },
    {
      id: 2,
      tooltipTitle: `Full setup for your Ring, Nest, & more`,
      image: doorbell,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/doorbell.svg`,
      title: `Smart, Doorbell`,
      path: ``,
    },
    {
      id: 3,
      tooltipTitle: `Install and setup for your Nest, Ecobee & more`,
      image: thermostat,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/thermostat.svg`,
      title: `Smart, thermostat`,
      path: ``,
    },
    {
      id: 4,
      tooltipTitle: `Setup and configure to any smart hub device`,
      image: speaker,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/device.svg`,
      title: `Smart Speaker, or hub`,
      path: ``,
    },
    {
      id: 5,
      tooltipTitle: `Protect your home with a smart door lock`,
      image: lock,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/lock.svg`,
      title: `Smart, Door lock`,
      path: ``,
    },
    {
      id: 6,
      tooltipTitle: `Gain smart and seamless access to your home`,
      image: garage,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/garage.svg`,
      title: `Smart Garage, Opener`,
      path: ``,
    },
    {
      id: 7,
      tooltipTitle: `Install speakers, gaming systems, surround sound & more`,
      image: theater,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/theater.svg`,
      title: `Home Theater, devices`,
      path: ``,
    },
    {
      id: 8,
      tooltipTitle: `Support for Wifi connectivity and signal extension`,
      image: wifi,
      imageHover: `https://d7gh5vrfihrl.cloudfront.net/website/icons/smart-home/hover/wifi.svg`,
      title: `Wifi connection, setup`,
      path: ``,
    },
  ];
  // const mouseHoverSmartHome = (id) => {
  //   if (id === 1) {
  //     setImageCard1(servicesCardOptionsSmartHome[0].imageHover);
  //   } else if (id === 2) {
  //     setImageCard2(servicesCardOptionsSmartHome[1].imageHover);
  //   } else if (id === 3) {
  //     setImageCard3(servicesCardOptionsSmartHome[2].imageHover);
  //   } else if (id === 4) {
  //     setImageCard4(servicesCardOptionsSmartHome[3].imageHover);
  //   } else if (id === 5) {
  //     setImageCard5(servicesCardOptionsSmartHome[4].imageHover);
  //   } else if (id === 6) {
  //     setImageCard6(servicesCardOptionsSmartHome[5].imageHover);
  //   } else if (id === 7) {
  //     setImageCard7(servicesCardOptionsSmartHome[6].imageHover);
  //   } else {
  //     setImageCard8(servicesCardOptionsSmartHome[7].imageHover);
  //   }
  // };

  const mouseHoverSmartHome = (id) => {
    if (id === 1) {
      setImageCard1(cameraHover);
    } else if (id === 2) {
      setImageCard2(doorbellHover);
    } else if (id === 3) {
      setImageCard3(thermostatHover);
    } else if (id === 4) {
      setImageCard4(speakerHover);
    } else if (id === 5) {
      setImageCard5(lockHover);
    } else if (id === 6) {
      setImageCard6(garageHover);
    } else if (id === 7) {
      setImageCard7(theaterHover);
    } else {
      setImageCard8(wifiHover);
    }
  };

  const mouseOutSmartHome = (id) => {
    if (id === 1) {
      setImageCard1(imageCard1);
    } else if (id === 2) {
      setImageCard2(imageCard2);
    } else if (id === 3) {
      setImageCard3(imageCard3);
    } else if (id === 4) {
      setImageCard4(imageCard4);
    } else if (id === 5) {
      setImageCard5(imageCard5);
    } else if (id === 6) {
      setImageCard6(imageCard6);
    } else if (id === 7) {
      setImageCard7(imageCard7);
    } else {
      setImageCard8(imageCard8);
    }
  };

  return (
    <div className='servicesHoverCardsGrid'>
      {screen === 'home' ? (
        <Row>
          {servicesCardOptionsHome &&
            servicesCardOptionsHome.map((item, i) => {
              return (
                <Col key={i} className='center'>
                  <Link
                    to=''
                    onMouseOver={(e) => {
                      mouseHoverHome(item.id);
                    }}
                    onMouseOut={(e) => {
                      mouseOutHome(item.id);
                    }}
                  >
                    <Tooltip color='white' placement='top' title={item.tooltipTitle}>
                      <div className='service-card'>
                        <div className='image-container'>
                          {item.image && <img src={item.image} alt='service-image' />}
                        </div>
                        <div className='service-name'>
                          {item.title.split(',').map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </Tooltip>
                  </Link>
                </Col>
              );
            })}
        </Row>
      ) : screen === 'garage-door' ? (
        <Row>
          {servicesCardOptionsHome &&
            servicesCardOptionsHome.slice(0, 5).map((item, i) => {
              return (
                <Col key={i} className='center'>
                  <Link
                    to=''
                    onMouseOver={(e) => {
                      mouseHoverHome(item.id);
                    }}
                    onMouseOut={(e) => {
                      mouseOutHome(item.id);
                    }}
                  >
                    {/* <Tooltip color='white' placement='top' title={item.tooltipTitle}> */}
                    <div className='service-card'>
                      <div className='image-container'>
                        {item.image && <img src={item.image} alt='service-image' />}
                      </div>
                      <div className='service-name'>
                        {item.title.split(',').map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                    {/* </Tooltip> */}
                  </Link>
                </Col>
              );
            })}
        </Row>
      ) : (
        <Row>
          {servicesCardOptionsSmartHome &&
            servicesCardOptionsSmartHome.map((item, i) => {
              return (
                <Col key={i} className='center'>
                  <Link
                    to=''
                    onMouseOver={(e) => {
                      mouseHoverSmartHome(item.id);
                    }}
                    onMouseOut={(e) => {
                      mouseOutSmartHome(item.id);
                    }}
                  >
                    <Tooltip color='white' placement='top' title={item.tooltipTitle}>
                      <div className='service-card'>
                        <div className='image-container'>
                          {item.image && <img src={item.image} alt='service-image' />}
                        </div>
                        <div className='service-name'>
                          {item.title.split(',').map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </Tooltip>
                  </Link>
                </Col>
              );
            })}
        </Row>
      )}
    </div>
  );
};

export default ServicesHoverCardsGrid;
