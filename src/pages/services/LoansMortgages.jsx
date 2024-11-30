import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCar,
  faGraduationCap,
  faStore,
  faStar,
  faPercent,
  faHandshake,
  faChartLine,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';

function LoansMortgages() {
  return (
    <Container className='mt-5'>
      <h1 className='mb-5 text-center'>Loans & Mortgages</h1>
      <p className='lead text-center mb-5'>
        Achieve your dreams with our flexible financing solutions. We offer
        competitive rates and personalized lending options to meet your unique
        needs.
      </p>

      <Row className='gy-4'>
        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faHome} className='me-3 text-success' />
              Home Mortgages
            </h3>
            <p className='mb-4'>
              Make your dream home a reality with our competitive mortgage
              options and expert guidance throughout the home-buying process.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Fixed and adjustable-rate mortgages</li>
              <li className='mb-2'>✓ First-time homebuyer programs</li>
              <li className='mb-2'>✓ Refinancing options</li>
              <li className='mb-2'>✓ Home equity loans and lines of credit</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faCar} className='me-3 text-success' />
              Auto Loans
            </h3>
            <p className='mb-4'>
              Get on the road with confidence using our auto financing options
              for new and used vehicles at competitive rates.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ New and used vehicle financing</li>
              <li className='mb-2'>✓ Flexible repayment terms</li>
              <li className='mb-2'>✓ Quick approval process</li>
              <li className='mb-2'>✓ Auto loan refinancing available</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className='me-3 text-success'
              />
              Education Loans
            </h3>
            <p className='mb-4'>
              Invest in your future with our education financing solutions
              designed to help you achieve your academic goals.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                ✓ Undergraduate and graduate student loans
              </li>
              <li className='mb-2'>✓ Flexible repayment options</li>
              <li className='mb-2'>✓ Competitive interest rates</li>
              <li className='mb-2'>✓ No prepayment penalties</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faStore} className='me-3 text-success' />
              Business Loans
            </h3>
            <p className='mb-4'>
              Fuel your business growth with our range of commercial lending
              solutions tailored to your business needs.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Working capital loans</li>
              <li className='mb-2'>✓ Equipment financing</li>
              <li className='mb-2'>✓ Commercial real estate loans</li>
              <li className='mb-2'>✓ Business expansion funding</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className='mt-5 p-4 bg-light rounded shadow-sm'>
        <h4 className='mb-4'>
          <FontAwesomeIcon icon={faStar} className='me-3 text-success' />
          Why Choose Our Lending Services?
        </h4>
        <ul className='list-unstyled mb-0'>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faPercent} className='me-3 text-success' />
            Competitive interest rates and flexible terms
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faHandshake} className='me-3 text-success' />
            Personalized service and expert guidance
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faChartLine} className='me-3 text-success' />
            Quick approval process and funding
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon
              icon={faFileSignature}
              className='me-3 text-success'
            />
            Transparent documentation and no hidden fees
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default LoansMortgages;
