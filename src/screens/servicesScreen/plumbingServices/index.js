import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/plumbingServices/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import GetStarted1 from '../../../components/globalComponents/GetStarted1';
import ServicesSection from './../../../components/globalComponents/ServicesSection';
import TopTechnicianYelpCardsSlider from './../../../components/globalComponents/TopTechnicianYelpCardsSlider';
import ImageAndGreenCheckPoints from './../../../components/globalComponents/ImageAndGreenCheckPoints';

const PlumbingServicesScreen = ({ services }) => {
  ScrollToTop();

  const [service, _service] = useState({});
  useEffect(() => {
    let found = services.find((service)=> {  
      return service.slug === "plumbing-services"
    })
    _service(found)
  }, [services])
  
  const cardsInfo = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/kitchen-black.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/kitchen-blue.svg`,
      link: ``,
      title: `Kitchen`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/bath-black.svg`,
      // image: `hhttps://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/bath-blue.svg`,
      link: ``,
      title: `Bathroom`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/washer-black.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/washer-blue.svg`,
      link: ``,
      title: `Laundry`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/pumps-black.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/plumbing/pumps-blue.svg`,
      link: ``,
      title: `Pumps`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/plus.svg`,
      // image: `https://d7gh5vrfihrl.cloudfront.net/website/issues/appliances/plus_hover.svg`,
      link: ``,
      title: `More`,
    },
  ];
  const sectionInfo = {
    image: 'https://d7gh5vrfihrl.cloudfront.net/website/banners/plumbing-info.jpg',
    points: [
      {
        title: `No hidden fees`,
        description: `No emergency fee, no weekend fee.`,
      },
      {
        title: `On time, every time`,
        description: `We honor our arrival windows and text you ETA updates.`,
      },
      {
        title: `Risk-free`,
        description: `We don't start working until you approve our quote.`,
      },
      {
        title: `No mess. No stress.`,
        description: `We leave your home cleaner than we found it.`,
      },
    ],
  };
  return (
    <div className='plumbingServicesScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/banners/plumbing-desktop.jpg'
        title='Plumbing, made simple'
        description='Quality repairs and replacements, done right the first time.'
        btnTitle={services.length > 0? 'Schedule Now' : undefined} 
        btnLink={services.length > 0?'/book-a-service/service/plumbing-services/'+service.id: undefined}
      >
        <div className='images-container'>
          <img
            src='https://d7gh5vrfihrl.cloudfront.net/website/badges/yelp-stars.png'
            alt='image'
          />
        </div>
      </MainLandingSection>
      <div className='container-75'>
        <ServicesSection
          cardsInfo={cardsInfo}
          title='Book an appointment today'
          description='Where can we help?'
        />
        <ImageAndGreenCheckPoints sectionInfo={sectionInfo} />
        <TopTechnicianYelpCardsSlider title='Meet our five-star plumbing technicians' />
        <GetStarted1
          imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/get-started/plumbing-mobile.jpg'
          title='Ready to get, started?'
          description='We can be there in as, little as an hour.'
          btnTitle={services.length > 0? 'Schedule Now' : undefined} 
          btnLink={services.length > 0?'/book-a-service/service/plumbing-services/'+service.id: undefined}
        />
      </div>
    </div>
  );
};

export default PlumbingServicesScreen;
