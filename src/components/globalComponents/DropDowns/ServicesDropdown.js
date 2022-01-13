import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import '../../../styles/components/globalComponents/Dropdowns/ServiceDropdown.scss';

import disinfection from '../../../assets/icons/regular/disinfection.svg';
import disinfectionHover from '../../../assets/icons/hover/disinfection-hover.svg';
import garageDoors from '../../../assets/icons/regular/garage-doors.svg';
import garageDoorsHover from '../../../assets/icons/hover/garage-doors-hover.svg';
import handymanServices from '../../../assets/icons/regular/handyman-services.svg';
import handymanServicesHover from '../../../assets/icons/hover/handyman-hover.svg';
import homeAppliances from '../../../assets/icons/regular/home-appliances.svg';
import homeAppliancesHover from '../../../assets/icons/hover/home-appliances_hover.svg';
import phone from '../../../assets/icons/regular/phone.svg';
import phoneHover from '../../../assets/icons/hover/phone_hover.svg';
import plumbing from '../../../assets/icons/regular/plumbing.svg';
import plumbingHover from '../../../assets/icons/hover/plumbing-hover.svg';
import smartHome from '../../../assets/icons/regular/smart-home.svg';
import smartHomeHover from '../../../assets/icons/hover/smart-home-hover.svg';
import tvMounting from '../../../assets/icons/regular/tv-mounting.svg';
import tvMountingHover from '../../../assets/icons/hover/tv-mounting-hover.svg';

const ServicesDropDown = (props) => {
  let history = useHistory();
  const [disinfectionSrc, setDisinfectionSrc] = useState(disinfection);
  const [garageDoorsSrc, setGarageDoorsSrc] = useState(garageDoors);
  const [handymanServicesSrc, setHandymanServicesSrc] = useState(handymanServices);
  const [homeAppliancesSrc, setHomeAppliancesSrc] = useState(homeAppliances);
  const [phoneSrc, setPhoneSrc] = useState(phone);
  const [plumbingSrc, setPlumbingSrc] = useState(plumbing);
  const [smartHomeSrc, setSmartHomeSrc] = useState(smartHome);
  const [tvMountingSrc, setTvMountingSrc] = useState(tvMounting);
  const navigate = (path) => {
    history.push(path);
  };
  if (props.show && props.show === true) {
    return (
      <div className='shadow drp w-25' style={{ backgroundColor: 'white' }}>
        <ListGroup>
          <ListGroup.Item
            className='link clickable p-3 p-3'
            onClick={() => {
              navigate('/services/tv-mounting');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setTvMountingSrc(tvMountingHover);
            }}
            onMouseOut={() => {
              setTvMountingSrc(tvMounting);
            }}
          >
            <span>
              <img src={tvMountingSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Tv Mounting</span>
          </ListGroup.Item>
          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/home-appliances');
            }}
            onMouseOver={() => {
              setHomeAppliancesSrc(homeAppliancesHover);
            }}
            onMouseOut={() => {
              setHomeAppliancesSrc(homeAppliances);
            }}
          >
            <span>
              <img src={homeAppliancesSrc} width='50' className='icon'></img>
            </span>
            <span className='dropdown-link'>Home Appliances</span>
          </ListGroup.Item>

          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/handyman');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setHandymanServicesSrc(handymanServicesHover);
            }}
            onMouseOut={() => {
              setHandymanServicesSrc(handymanServices);
            }}
          >
            <span>
              <img src={handymanServicesSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Handyman Services</span>
          </ListGroup.Item>

          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/disinfection');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setDisinfectionSrc(disinfectionHover);
            }}
            onMouseOut={() => {
              setDisinfectionSrc(disinfection);
            }}
          >
            <span>
              <img src={disinfectionSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Disinfection Services</span>
          </ListGroup.Item>

          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/iphone-repair');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setPhoneSrc(phoneHover);
            }}
            onMouseOut={() => {
              setPhoneSrc(phone);
            }}
          >
            <span>
              <img src={phoneSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Iphone Repair</span>
          </ListGroup.Item>

          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/smart-home-installation');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setSmartHomeSrc(smartHomeHover);
            }}
            onMouseOut={() => {
              setSmartHomeSrc(smartHome);
            }}
          >
            <span>
              <img src={smartHomeSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Smart Home Installation</span>
          </ListGroup.Item>
          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/garage-door-repair');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setGarageDoorsSrc(garageDoorsHover);
            }}
            onMouseOut={() => {
              setGarageDoorsSrc(garageDoors);
            }}
          >
            <span>
              <img src={garageDoorsSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Garage door repair</span>
          </ListGroup.Item>
          <ListGroup.Item
            className='link clickable p-3'
            onClick={() => {
              navigate('/services/plumbing');
              props.onSelect && props.onSelect();
            }}
            onMouseOver={() => {
              setPlumbingSrc(plumbingHover);
            }}
            onMouseOut={() => {
              setPlumbingSrc(plumbing);
            }}
          >
            <span>
              <img src={plumbingSrc} width='45' className='icon'></img>
            </span>
            <span className='dropdown-link'>Plumbing Services</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  } else {
    return <></>;
  }
};
export default ServicesDropDown;
