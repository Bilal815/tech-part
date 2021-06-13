import { useState } from 'react';
import '../../styles/components/globalComponents/citiesCustomerReviewContainer.scss';

import { Rate } from 'antd';
import CitiesCustomerReviewImageTabs from './CitiesCustomerReviewImageTabs';

const CitiesCustomerReviewContainer = ({ city }) => {
  const [currentReview, setCurrentReview] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Lynn C.',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%202.jpeg',
      message: `Can't say enough good things about these guys. Great communication with several text messages updating about appointment. The tech worked quickly and he was very professional and pleasant to talk to.`,
      rate: 4,
    },
    {
      id: 2,
      name: 'Akhil M.',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/male%20customer%206.jpeg',
      message:
        'This company is professional and efficient. Received text updates on the arrival of the tech. He was knowledgeable and polite and fixed the problem with our dryer. We would use this company again.',
      rate: 3.4,
    },
    {
      id: 3,
      name: 'Sandra M.',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message:
        'The customer service provided gives me an idea of how important customer satisfaction is to the company, and a sign of great things to come!',
      rate: 5,
    },
    {
      id: 4,
      name: 'Brent K.',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/male%20customer.jpeg',
      message:
        'After months of dealing with unreliable contractors and service industries, I was amazed by Puls organization, ease of booking, constant communication and professional installer.',
      rate: 1,
    },
    {
      id: 5,
      name: 'Jon P.',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/male%20customer%203.jpeg',
      message:
        'First time using Puls and they were professional, timely, and honest on our appliance repair. Very reasonable cost. Like a trustworthy mechanic, I will use them again.',
      rate: 2,
    },
  ]);

  const { name, src, message, rate } = currentReview;
  return (
    <div className='citiesCustomerReviewContainer'>
      <h1 className='text-center text-white'>What customers in {city} are saying</h1>
      <p className='text-center'>{message}</p>
      <div className='d-flex justify-content-center stars'>
        <Rate disabled value={rate} style={{ color: 'rgb(93, 218, 237)' }} />
      </div>
      <div className='name'>{name}</div>
      <div className='container-60'>
        <CitiesCustomerReviewImageTabs data={data} setCurrentReview={setCurrentReview} />
      </div>
    </div>
  );
};
export default CitiesCustomerReviewContainer;
