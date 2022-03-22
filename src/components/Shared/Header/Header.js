import { Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';
import './Header.css'
import img1 from '../../../images/img-1.webp'
import img2 from '../../../images/img-2.webp'
import img3 from '../../../images/img-3.webp'
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
      {/* navabr */}
      <div>
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#" className='text-light'>NewLife Hospital</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='text-light'> Home</Nav.Link>
                <Nav.Link href="#action2" className='text-light'>Departments</Nav.Link>
                <Nav.Link href="#action2" className='text-light'>Tests</Nav.Link>
                <Nav.Link href="#action2" className='text-light'>Services</Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* carousel */}
      <div className='carousel-container'>
        <Carousel fade>
          <Carousel.Item>
            <img
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
         
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
    
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;