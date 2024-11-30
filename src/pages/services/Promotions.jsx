import { Container, Row, Col } from 'react-bootstrap';

function Promotions() {
  return (
    <Container className='mt-4'>
      <h1 className='mb-4'>Our Services</h1>
      <Row>
        <Col>
          <h2>Promotions</h2>
          <p>Take advantage of our latest offers and promotions.</p>
          <ul>
            <li>New Account Bonus</li>
            <li>Referral Rewards</li>
            <li>Seasonal Savings Rates</li>
            <li>Credit Card Cashback Offers</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Promotions;
