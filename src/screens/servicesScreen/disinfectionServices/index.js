import React from 'react';
import '../../../styles/screens/servicesScreens/disinfectionServices/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import BulletPoints from './../../../components/globalComponents/BulletPoints';
import ImageAndGreenCheckPoints from './../../../components/globalComponents/ImageAndGreenCheckPoints';
import GetStarted1 from './../../../components/globalComponents/GetStarted1';
import EasyToBook from './../../../components/globalComponents/EasyToBook';

const DisinfectionServicesScreen = () => {
  ScrollToTop();
  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/plant-and-calendar.svg`,
      title: `Book online in seconds`,
      description: `Easily book and customize your appointment details online`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/disinfection/disinfection-mask.svg`,
      title: `Tell us when to come`,
      description: `The process takes about 45 minutes per 2,000 sq ft to disinfect all surfaces`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/disinfection/disinfection-house.svg`,
      title: `Enjoy a virus-free home`,
      description: `Safely re-enter and enjoy your virus-free home`,
    },
  ];
  const sectionInfo = {
    image: 'https://d7gh5vrfihrl.cloudfront.net/website/disinfection/info-desktop.jpg',
    points: [
      {
        title: `Professional service`,
        description: `We use disinfecting spray solutions which target bacteria, including COVID-19`,
      },
      {
        title: `Your safety is our top priority`,
        description: `All products used are 100% safe, EPA registered, and fragrance-free`,
      },
      {
        title: `Sanitizing every surface`,
        description: `From your bathrooms, living room to basement, we'll tackle all surfaces in your home`,
      },
    ],
  };
  return (
    <div className='disinfectionServicesScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/disinfection/disinfection-desktop-new.jpg'
        title='Household & Commercial, Sanitization'
        description='Minimize viruses and bacteria, by surface disinfection'
        btnTitle='Book now'
        btnLink='/'
      />
      <div className='container-75'>
        <BulletPoints bulletPoints={bulletPoints} />
        <ImageAndGreenCheckPoints sectionInfo={sectionInfo} />
      </div>
      <EasyToBook
        btnLink=''
        btnTitle='Book now'
        title='Easy to book'
        description={` Easily customize and book any Puls service online and receive a quote in seconds./
                Just tell us when and where to come and we'll do the rest, leaving you more time to
                focus on what’s most important.`}
        image='https://d7gh5vrfihrl.cloudfront.net/website/banners/double-phone-light.png'
      />
      <div className='container-75'>
        <GetStarted1
          imageUrl='https://d7gh5vrfihrl.cloudfront.net/website/get-started/appliances.jpg'
          title='Ready to get, started?'
          description={`We're only a few clicks or, a phone call away.`}
          btnTitle='Schedule now'
          btnLink='/'
        />
      </div>
    </div>
  );
};

export default DisinfectionServicesScreen;
