import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../styles/components/globalComponents/headers/defaultHeader.scss';
import ServiceDropDown from '../DropDowns/ServicesDropdown';
import { useEffect, useState } from 'react';
import TechPartLogo from '../../../assets/tech-app-logo.png';

const DefaultHeader = () => {
  const [isScrolled, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  // let listener = null;

  useEffect(() => {
    // listener = document.addEventListener('scroll', (e) => {
    document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
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
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <span
              onMouseOver={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              <Nav.Link>Our Services</Nav.Link>
              <ServiceDropDown show={show} />
            </span>
            <Nav.Link as={Link} to='/pricing'>
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Info Hub
            </Nav.Link>
            <Nav.Link as={Link} to='/members'>
              Members
            </Nav.Link>
            <Nav.Link as={Link} to='/become-a-tech'>
              Become a Tech
            </Nav.Link>
            <Nav.Link as={Link} to='/property-manager'>
              Property Managers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default DefaultHeader;
