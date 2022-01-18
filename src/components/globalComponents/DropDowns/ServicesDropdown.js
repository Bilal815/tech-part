import {useEffect, useState} from 'react';
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
// import axios from "axios";

const ServicesDropDown = (props) => {
  // const [services, _services] = useState([]);
  // useEffect(() => {
  //     getServicesFromServer();
  //     getAppliancesFromServer();
  // }, []);

  // const getServicesFromServer = () => {
  //   // return("");
  //   axios.post('/api/services', {}).then(res => {
  //     // console.log('services api response:', res.data.response.detail);
  //     _services([...res.data.response.detail]);
  //   }).catch(res => {
  //     console.log('services api catch:', res);
  //   });
  // }

  // const getAppliancesFromServer = () => {
  //   return( "" );
  //   axios.post('/api/service-appliances', {service_id:2}).then(res => {
  //     console.log('service-appliances api response:', res.data.response.detail);
  //   }).catch(res => {
  //     console.log('service-appliances api catch:', res);
  //   });
  // }

  let history = useHistory();
  const [disinfectionSrc, setDisinfectionSrc] = useState(disinfection);
  const [garageDoorsSrc, setGarageDoorsSrc] = useState(garageDoors);
  const [handymanServicesSrc, setHandymanServicesSrc] = useState(handymanServices);
  const [homeAppliancesSrc, setHomeAppliancesSrc] = useState(homeAppliances);
  const [phoneSrc, setPhoneSrc] = useState(phone);
  const [plumbingSrc, setPlumbingSrc] = useState(plumbing);
  const [smartHomeSrc, setSmartHomeSrc] = useState(smartHome);
  const [tvMountingSrc, setTvMountingSrc] = useState(tvMounting);

  const ICONS = {
    "1": { out: tvMounting, over: tvMountingHover, setSrc: setTvMountingSrc, src: tvMountingSrc },
    "2": { out: homeAppliances, over: homeAppliancesHover, setSrc: setHomeAppliancesSrc, src: homeAppliancesSrc },
    "3": { out: handymanServices, over: handymanServicesHover, setSrc: setHandymanServicesSrc, src: handymanServicesSrc  },
    "4": { out: disinfection, over: disinfectionHover, setSrc: setDisinfectionSrc, src: disinfectionSrc  },
    "5": { out: phone, over: phoneHover, setSrc: setPhoneSrc, src: phoneSrc  },
    "6": { out: garageDoors, over: garageDoorsHover, setSrc: setGarageDoorsSrc, src: garageDoorsSrc  },
    "7": { out: smartHome, over: smartHomeHover, setSrc: setSmartHomeSrc, src: smartHomeSrc  },
    "8": { out: plumbing, over: plumbingHover, setSrc: setPlumbingSrc, src: plumbingSrc  },
  };

  const navigate = (path) => {
    history.push(path);
  };
  if (props.show && props.show === true && props.services.length > 0) {
    return (
      <div className='shadow drp w-25' style={{ backgroundColor: 'white' }}>
        <ListGroup>
        {props.services.map((services, key)=>{
          return (
            <ListGroup.Item
              key={key}
              className='link clickable p-3'
              onClick={() => {
                navigate('/services/'+services.slug);
                props.onSelect && props.onSelect();
              }}
              onMouseOver={() => {
                ICONS[services.id + ""].setSrc(ICONS[services.id + ""].over);
              }}
              onMouseOut={() => {
                ICONS[services.id + ""].setSrc(ICONS[services.id + ""].out);
              }}
            >
              <span>
                <img alt={Object.keys(ICONS)[3]} src={ICONS[services.id + ""].src} width='45' className='icon'></img>
              </span>
              <span className='dropdown-link'>{services.name}</span>
            </ListGroup.Item>
          );
        })}
        </ListGroup>
      </div>
    );
  } else {
    return <></>;
  }
};
export default ServicesDropDown;
