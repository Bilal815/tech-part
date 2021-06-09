import { useState } from 'react';
import '../../styles/components/globalComponents/review.scss';

import { Rate } from 'antd';
import ImageTabs from './ImageTabs';

const Review = (props) => {
  const [currentReview, setCurrentReview] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Anaya',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message:
        'ery impressed with the response and ability to get it done. I would definitely use this service again, although I hope to not have to.',
      rate: 4,
    },
    {
      id: 2,
      name: 'Anaya',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message: 'a123sdasd',
      rate: 3.4,
    },
    {
      id: 3,
      name: 'Anaya',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message: '45gasd',
      rate: 5,
    },
    {
      id: 4,
      name: 'Anaya',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message: 'asuyksd',
      rate: 1,
    },
    {
      id: 5,
      name: 'Anaya',
      src: 'https://s3.amazonaws.com/static.puls.com/website/SEO/female%20customer%203.jpeg',
      message: 'a456sd',
      rate: 2,
    },
  ]);
  return (
    <div className='w-100 customer-review-wrapper'>
      <h1 className='text-center text-white'>What customers in {props.city} are saying</h1>
      <p className='text-center review'>{currentReview.message}</p>
      <div className='d-flex justify-content-center'>
        <Rate disabled value={currentReview.rate} style={{ color: 'rgb(93, 218, 237)' }} />
      </div>
      <ImageTabs data={data} setCurrentReview={setCurrentReview} />
    </div>
  );
};
export default Review;
