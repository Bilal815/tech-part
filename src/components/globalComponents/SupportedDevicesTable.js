import React from 'react';
import '../../styles/components/globalComponents/supportedDevicesTable.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SupportedDevicesTable = ({ supportedDevicesInfo }) => {
  const { bgImage, info } = supportedDevicesInfo;
  return (
    <div className='supportedDevicesTable' style={{ backgroundImage: `url(${bgImage})` }}>
      <Row className='table-container'>
        {info &&
          info.map((item, i) => (
            <Col key={i} sm={12} md={6} className='item-container'>
              <div className='item'>
                <p className='number center'>{i + 1}</p>
                <div className='link'>
                  {item &&
                    item.split(',').map((link, i) => (
                      <Link key={i} to='/' className='mb-2'>
                        {link}
                      </Link>
                    ))}
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default SupportedDevicesTable;
