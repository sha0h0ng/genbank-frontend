import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-dark text-white py-4'>
      <Container>
        <Row>
          <Col md={6}>
            <h5>GenBank</h5>
            <p>Your trusted financial partner since 1990</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/about' className='text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-white'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <address>
              1 Raffles Place
              <br />
              #01-01 One Raffles Place
              <br />
              Singapore 048616
              <br />
              Phone: 1800-436-2265
            </address>
          </Col>
        </Row>
        <hr />
        <div className='text-center'>
          <p>&copy; 2024 GenBank. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
