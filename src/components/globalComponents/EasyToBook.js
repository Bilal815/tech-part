import React from 'react';
import '../../styles/components/globalComponents/easyToBook.scss';
import { Row, Col } from 'react-bootstrap';
import { LinkButton } from '../../styledComponents';

const EasyToBook = ({ btnLink, btnTitle, title, description, image }) => {
  return (
    <div className='easyToBook'>
      <div className='container-75'>
        <Row>
          <Col sm={12} md={6}>
            <div className='content-container'>
              {title && <h1>{title}</h1>}

              {description && (
                <div className='description-container'>
                  {description.split('/').map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              )}

              <LinkButton link={btnLink} name={btnTitle} />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='image-container'>
              <img src={image} alt='mobile-banner' />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EasyToBook;
