import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'md="6"className='mb-4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>MultiMart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto officia corrupti molestiae qui! Dolor blanditiis earum a distinctio officia.
            </p>
          </Col>
          <Col lg='3' md='3'className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Morden Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3'className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacts</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-map-pin-line">Bhubaneswar</i></span>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-phone-line">+91-6371949141</i></span>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-mail-line">santrabhishek@gmail.com</i></span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              ©️ {year} developed by Abhishek Santra.All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

    </footer>

  )
}

export default Footer