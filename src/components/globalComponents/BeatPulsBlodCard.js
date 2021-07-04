import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/globalComponents/beatPulsBlodCard.scss';

const BeatPulsBlodCard = ({ blog }) => {
  {
    /* <Link to={blog.url} className='beatPulsBlodCard'> */
  }
  return (
    <div className='beatPulsBlodCard'>
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

export default BeatPulsBlodCard;
