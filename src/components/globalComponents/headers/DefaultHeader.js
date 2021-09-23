import { useEffect, useState } from 'react';
import '../../../styles/components/globalComponents/headers/defaultHeader.scss';

import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import ServiceDropDown from '../DropDowns/ServicesDropdown';
import TechPartLogo from '../../../assets/tech-app-logo.png';

const DefaultHeader = ({ location: { pathname }, services }) => {
  const [isScrolled, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  // let listener = null;
  const defaultHeaderNotShow =
    pathname === '/application-tv' ||
    pathname === '/application-appliance' ||
    pathname === '/application-handy' ||
    pathname === '/application-phone' ||
    pathname === '/application-plumbing' ||
    pathname === '/cities/az' ||
    pathname === '/cities/az/phoenix' ||
    pathname === '/cities/ca' ||
    pathname === '/cities/ca/los-angeles' ||
    pathname === '/cities/fl/miami' ||
    pathname === '/cities/ga' ||
    pathname === '/cities/ga/atlanta' ||
    pathname === '/cities/ma' ||
    pathname === '/cities/ma/boston' ||
    pathname === '/cities/ny' ||
    pathname === '/cities/ny/newyork-city' ||
    pathname === '/cities/nc' ||
    pathname === '/cities/nc/charlotte' ||
    pathname === '/cities/pa' ||
    pathname === '/cities/pa/philadelphia' ||
    pathname === '/cities/tx' ||
    pathname === '/cities/tx/dallas' ||
    pathname === '/cities/tx/houston' ||
    pathname === '/cities/dc' ||
    pathname === '/cities/dc/washington-dc' ||
    pathname === '/tcl';

  useEffect(() => {
    // listener = document.addEventListener('scroll', (e) => {
    document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  const whiteColor =
    pathname === '/simplisafe' ||
    pathname === '/hisense' ||
    pathname === '/puls-for-business' ||
    pathname === '/about-us'
      ? '#ffffff'
      : '#0000008c';
  const whiteColorStyle = {
    color: isScrolled ? '#0000008c' : whiteColor,
  };

  const HisenseScreenHeader = () => (
    <div className='hisenseScreenHeader'>
      <a style={whiteColorStyle} className='nav-link' href='https://blog.puls.com/' target='_blank'>
        Info Hub
      </a>
      <a style={whiteColorStyle} href='tel:+18605960177'>
        <img
          src='https://d7gh5vrfihrl.cloudfront.net/website/icons/phone.png'
          className='phone-icon'
          alt='(860) 596-0177'
        />
        (860) 596-0177
      </a>
    </div>
  );

  return defaultHeaderNotShow ? null : (
    <Navbar
      variant='light'
      className={isScrolled ? 'defaultHeader colored p-4' : 'defaultHeader p-4'}
      fixed={isScrolled ? 'top' : ''}
      expand='lg'
    >
      <div className='container-75'>
        <Nav.Link as={Link} to='/'>
          <img src={TechPartLogo} alt='TechPartLogo' />
        </Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {pathname === '/hisense' ? (
          <HisenseScreenHeader />
        ) : (
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <span onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <Nav.Link style={whiteColorStyle}>Our Services</Nav.Link>
                <ServiceDropDown show={show} services={services} />
              </span>
              <Nav.Link style={whiteColorStyle} as={Link} to='/pricing'>
                Pricing
              </Nav.Link>
              <a
                style={whiteColorStyle}
                className='nav-link'
                href='https://blog.puls.com/'
                target='_blank'
              >
                Info Hub
              </a>
              <Nav.Link style={whiteColorStyle} as={Link} to='/members'>
                Members
              </Nav.Link>
              <Nav.Link style={whiteColorStyle} as={Link} to='/become-a-tech'>
                Become a Tech
              </Nav.Link>
              <Nav.Link style={whiteColorStyle} as={Link} to='/property-manager'>
                Property Managers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </div>
    </Navbar>
  );
};
export default withRouter(DefaultHeader);
