import React from 'react';

import { Row, Col } from 'react-bootstrap';

const Locations = () => {
  const style = { textAlign: 'center', color: '#33393dd9', fontSize: '17px' };
  const locations = [
    'Asheville, NC',
    'Denver, CO',
    'Naples, FL',
    'Portland, OR',
    'Atlanta, GA',
    'Detroit, MI',
    'Nashville, TN',
    'Raleigh-Durham, NC',
    'Austin, TX',
    'Ft. Lauderdale, FL',
    'New Orleans, LA',
    'Sacramento, CA',
    'Baltimore, MD',
    'Hartford, CT',
    'New York, NY',
    'San Antonio, TX',
    'Baton Rouge, LA',
    'Houston, TX',
    'Newark, NJ',
    'San Diego, CA',
    'Boston, MA',
    'Kansas City, KS',
    'Oklahoma City, OK',
    'San Francisco, CA',
    'Charlotte, NC',
    'Las Vegas, NV',
    'Orlando, FL',
    'Seattle, WA',
    'Chicago, IL',
    'Los Angeles, CA',
    'Philadelphia, PA',
    'Tampa, FL',
    'Cleveland, OH',
    'Miami, FL',
    'Phoenix, AZ',
    'Washington DC',
    'Dallas, TX',
    'Milwaukee, WI',
    'Pittsburgh, PA',
  ];

  return (
    <div className='locations'>
      <Row>
        {locations &&
          locations.map((location, i) => (
            <Col sm={6} md={4} lg={2}>
              <p key={i} className='location' style={style}>
                {location}
              </p>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Locations;
