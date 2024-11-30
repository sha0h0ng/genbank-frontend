import { Container, Row, Col } from 'react-bootstrap';

function DigitalServices() {
  return (
    <Container className='mt-4'>
      <h1 className='mb-4'>Our Services</h1>
      <Row>
        <Col>
          <h2>Digital Services</h2>
          <p>
            Experience convenient banking with our cutting-edge digital
            solutions.
          </p>
          <ul>
            <li>Online Banking</li>
            <li>Mobile App</li>
            <li>E-Statements</li>
            <li>Digital Wallet Integration</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default DigitalServices;
