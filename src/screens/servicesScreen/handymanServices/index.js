import React, { useState, useEffect } from 'react';
import '../../../styles/screens/servicesScreens/handymanServices/index.scss';
import { ScrollToTop } from './../../../utilities/index';
import EasyToBook from './../../../components/globalComponents/EasyToBook';
import BulletPoints from '../../../components/globalComponents/BulletPoints';

const HandymanServicesScreen = ({ services }) => {
  ScrollToTop();

  const [service, _service] = useState({});
  useEffect(() => {
    let found = services.find((service)=> {  
      return service.slug === "handyman-services"
    })
    _service(found)
  }, [services])

  const bulletPoints = [
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/plant-and-calendar.svg`,
      title: `Book online in seconds`,
      description: `Easily book and customize your appointment details online.`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/door.svg`,
      title: `Tell us when to come`,
      description: `Select the day and time for your service, even as early as same-day.`,
    },
    {
      image: `https://d7gh5vrfihrl.cloudfront.net/website/bullets/tools.svg`,
      title: `Sit back and relax`,
      description: `Your tech arrives on time bringing the tools, expertise and know-how for the job.`,
    },
  ];

  return (
    <div className='handymanServicesScreen '>
      <div className='container-75'>
        <BulletPoints bulletPoints={bulletPoints} />
      </div>
      <EasyToBook
        btnTitle={services.length > 0? 'Book now' : undefined} 
        btnLink={services.length > 0?'/book-a-service/service/handyman-services/'+service.id: undefined}
        title='Easy to book'
        description={` Easily customize and book any Puls service online and receive a quote in seconds./
                Just tell us when and where to come and we'll do the rest, leaving you more time to
                focus on what’s most important.`}
        image='https://d7gh5vrfihrl.cloudfront.net/website/banners/double-phone-light.png'
      />
    </div>
  );
};

export default HandymanServicesScreen;
