import React, { useState } from 'react';
import '../../styles/components/globalComponents/servicesHoverCardsGrid.scss';

import { Tooltip, Button } from 'antd';
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

const ServicesHoverCardsGrid = () => {
  const [tvMountingSrc, setTvMountingSrc] = useState(tvMounting);
  const [homeAppliancesSrc, setHomeAppliancesSrc] = useState(homeAppliances);
  const [handymanServicesSrc, setHandymanServicesSrc] = useState(handymanServices);
  const [disinfectionSrc, setDisinfectionSrc] = useState(disinfection);
  const [iPhoneSrc, setPhoneSrc] = useState(iPhone);
  const [smartHomeSrc, setSmartHomeSrc] = useState(smartHome);
  const [garageDoorsSrc, setGarageDoorsSrc] = useState(garageDoors);
  const [plumbingSrc, setPlumbingSrc] = useState(plumbing);

  const mouseHover = (id) => {
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
  const mouseOut = (id) => {
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

  const servicesCardOptions = [
    {
      id: 1,
      tooltipTitle: `Let us do the heavy lifting for your new TV`,
      image: tvMountingSrc,
      title: `TV, Mounting`,
      path: ``,
    },
    {
      id: 2,
      tooltipTitle: `Repairs for your dishwasher, fridge, oven, washer and more`,
      image: homeAppliancesSrc,
      title: `Home, Appliances`,
      path: ``,
    },
    {
      id: 3,
      tooltipTitle: `Handyman services made simple`,
      image: handymanServicesSrc,
      title: `Handyman, Services`,
      path: ``,
    },
    {
      id: 4,
      tooltipTitle: `Minimize viruses and bacteria by surface disinfection`,
      image: disinfectionSrc,
      title: `Disinfection, Services`,
      path: ``,
    },
    {
      id: 5,
      tooltipTitle: `Fix your phone at your home, office, or wherever you prefer`,
      image: iPhoneSrc,
      title: `iPhone, Repair`,
      path: ``,
    },
    {
      id: 6,
      tooltipTitle: `Customize your connected home with expert setup and integration`,
      image: smartHomeSrc,
      title: `Smart Home, Installation`,
      path: ``,
    },
    {
      id: 7,
      tooltipTitle: `Repair or replace your garage door.`,
      image: garageDoorsSrc,
      title: `Garage Door, Repair`,
      path: ``,
    },
    {
      id: 8,
      tooltipTitle: `Plumbing solutions for your faucets, sinks, drains and more`,
      image: plumbingSrc,
      title: `Plumbing, Services`,
      path: ``,
    },
  ];

  return (
    <div className='servicesHoverCardsGrid'>
      <Row>
        {servicesCardOptions &&
          servicesCardOptions.map((item, i) => (
            <Col key={i} className='center'>
              <Link
                to=''
                onMouseOver={() => mouseHover(item.id)}
                onMouseOut={() => mouseOut(item.id)}
              >
                <Tooltip color='white' placement='top' title={item.tooltipTitle}>
                  <div className='service-card'>
                    {item.image && <img src={item.image} alt='service-image' />}
                    <div className='service-name'>
                      {item.title.split(',').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Tooltip>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ServicesHoverCardsGrid;
