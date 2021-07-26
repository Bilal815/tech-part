import React from 'react';
import '../../../styles/screens/servicesScreens/smartHomeInstallation/index.scss';

import { Collapse } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { ScrollToTop } from './../../../utilities/index';
import MainLandingSection from './../../../components/globalComponents/MainLandingSection';
import BackgroundPulsImageSection from '../../../components/globalComponents/BackgroundPulsImageSection';
import BulletPoints from './../../../components/globalComponents/BulletPoints';

const { Panel } = Collapse;

const SmartHomeInstallationScreen = () => {
  ScrollToTop();

  const backgroundPulsImageOptions = [
    `Installation and set-up*`,
    `A brief tutorial of the device and corresponding app`,
    `Optional connection to other smart home devices`,
    `90-day guarantee on all installation services`,
  ];

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/smart-home/simple.png`,
      description: `Request an appointment in minutes`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/smart-home/sameday.png`,
      description: `One-hour arrival window with an option to book same-day`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/smart-home/vetted.png`,
      description: `Background checked technicians`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/smart-home/experience.png`,
      description: `50,000+ installations and counting`,
    },
  ];

  const brandsLogo = [
    'https://d7gh5vrfihrl.cloudfront.net/website/brands/nest.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/brands/google.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/brands/alexa.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/brands/ring.png',
    'https://d7gh5vrfihrl.cloudfront.net/website/brands/arlo.png',
  ];

  const faqList = [
    {
      id: 1,
      question: `What does a smart home installation entail?`,
      answer: `A technician comes to your house and installs your smart device, including connecting it to the internet for you.`,
    },
    {
      id: 2,
      question: `Do you install Ring doorbells?`,
      answer: `Yes, we install Ring doorbells and all types of smart doorbells and security cameras.`,
    },
    {
      id: 3,
      question: `Can you connect all of my smart devices to a single hub?`,
      answer: `Yes, assuming that your smart device is compatible with your hub.`,
    },
    {
      id: 4,
      question: `Do I need a Wifi connection in order to use smart home devices?`,
      answer: `To experience the full features and functionality of your devices, a Wifi connection is required upon installation. Please have your Wifi password accessible to connect your new devices as well.`,
    },
    {
      id: 5,
      question: `Will the technician educate me on the product and how to use it?`,
      answer: `Yes! Our technicians will give you a brief tutorial on how to use the corresponding application with your new device, as well as a demonstration of its main features.`,
    },
    {
      id: 6,
      question: `Can smart home devices be used outside?`,
      answer: `Some smart home devices are specifically designed to withstand weather and outdoor conditions (security cameras, doorbells, etc…). However, some may not be able to operate or function properly outside. Ask your technician for best practices with your selected smart home device.`,
    },
    {
      id: 7,
      question: `Will I have to create an account for the app to use my new smart home device?`,
      answer: `Most smart home devices require you to create a user account in order to use it to its fullest potential.`,
    },
    {
      id: 8,
      question: `My wifi has poor signal where I want to install my new smart home device. Will that be an issue?`,
      answer: `Poor internet connections can cause your new device to not function as expected. WiFi repeaters and extenders can be a quick fix for this issue. Talk to your technician for the best solution for your home.`,
    },
  ];

  const header = (accordianHeaderTitle) => {
    return (
      <div className='innerAccordianHeader sb '>
        <span>{accordianHeaderTitle}</span>
        <div className='icon'>
          <AiOutlinePlus className='plus-icon' size='25px' />
          <AiOutlineMinus className='minus-icon' size='25px' />
        </div>
      </div>
    );
  };

  return (
    <div className='smartHomeInstallationScreen'>
      <MainLandingSection
        backgroundImage='https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/new-smart-home-desktop.png'
        title='Smart home, installation & setup'
        description='The convenient and stress-free, solution to upgrade your home'
        btnTitle='Schedule now'
        btnLink='/'
      />
      <div className='container-75'>
        <div className='needs-to-install'>
          <h1 className='center-section-heading'>What needs to be installed</h1>
        </div>
        <div className='whats-include'>
          <h1 className='center-section-heading'>What’s included</h1>
          <BackgroundPulsImageSection backgroundPulsImageOptions={backgroundPulsImageOptions} />
        </div>
        <div className='why-should-use-puls'>
          <BulletPoints bulletPoints={bulletPoints} heading='Why should you use Puls?' />
        </div>
        <div className='supported-brands'>
          <h1 className='center-section-heading'>Supported brands</h1>
          <div className='logos-container'>
            {brandsLogo && brandsLogo.map((logo, i) => <img key={i} src={logo} alt='logo' />)}
          </div>
        </div>
      </div>
      <div className='container-60'>
        <div className='faq'>
          <h1 className='center-section-heading'>FAQ</h1>
          <Collapse accordion expandIconPosition='right'>
            {faqList &&
              faqList.map((f) => (
                <Panel header={header(f.question)} key={`${f.id}`} showArrow={false}>
                  <p>{f.answer}</p>
                </Panel>
              ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeInstallationScreen;
