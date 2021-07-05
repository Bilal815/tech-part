import React from 'react';
import '../../styles/components/globalComponents/beatPulsBlogCard.scss';

import { Link } from 'react-router-dom';

const BeatPulsBlogCard = ({ blog }) => {
  {
    /* <Link to={blog.url} className='beatPulsBlodCard'> */
  }
  return (
    <div className='beatPulsBlogCard'>
      <div className='image-container'>
        <img src={blog.imageUrl} alt='' />
      </div>
      <div className='content-container'>
        <h6>{blog.title}</h6>
        <p>{blog.description}</p>
        <p className='date'>{blog.date}</p>
      </div>
    </div>
  );
};

export default BeatPulsBlogCard;
