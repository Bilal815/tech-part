import React from 'react';
import '../../styles/components/globalComponents/blogCard.scss';

import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, description, blogUrl }) => {
  return (
    <div className='blogCard'>
      <div className='header'>{image && <img src={`${image}`} alt='card-preview' />}</div>
      <div className='body'>
        {title && <h4 className='heading-3'>{title}</h4>}
        {description && <p>{description}</p>}
        <Link to={`${blogUrl ? blogUrl : '/'}`}>
          <span>Read more</span>
          <BsArrowRight className='blue' size='25' />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
