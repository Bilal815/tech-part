import React from 'react';
import '../../styles/components/globalComponents/onHoverZoomReadMoreCardSection.scss';

import { Row, Col } from 'react-bootstrap';
import { MdChevronRight } from 'react-icons/md';

const OnHoverZoomReadMoreCardSection = ({ readMoreInfo }) => {
  const OnHoverZoomReadMoreCard = ({ blogInfo }) => {
    const { bgImage, title, blogUrl } = blogInfo;
    return (
      <a
        className='onHoverZoomReadMoreCard'
        target='_blank'
        href={blogUrl}
        // rel='noopener noreferrer'
      >
        <img
          className='bg-hover-image'
          alt="background"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
        <div className='gradient' />
        <div className='content'>
          <h4>{title}</h4>
          <span className='readmore'>
            Read More <MdChevronRight size='25' />
          </span>
        </div>
      </a>
    );
  };
  return (
    <div className='onHoverZoomReadMoreCardSection'>
      <Row>
        {readMoreInfo &&
          readMoreInfo.map((blogInfo, i) => (
            <Col sm={12} md={6} key={i}>
              <OnHoverZoomReadMoreCard blogInfo={blogInfo} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default OnHoverZoomReadMoreCardSection;
