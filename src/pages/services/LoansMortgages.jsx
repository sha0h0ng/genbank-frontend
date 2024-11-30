import { Container, Row, Col } from 'react-bootstrap';

function Accounts() {
  return (
    <Container className='mt-4'>
      <h1 className='mb-4'>Our Services</h1>
      <Row>
        <Col>
          <h2>Savings & Current Accounts</h2>
          <p>
            Choose from our variety of account types to manage your money
            effectively.
          </p>
          <ul>
            <li>High-Yield Savings Accounts</li>
            <li>Checking Accounts</li>
            <li>Business Accounts</li>
            <li>Student Accounts</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Accounts;
