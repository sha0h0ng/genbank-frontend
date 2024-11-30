import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faMobileAlt,
  faFileAlt,
  faWallet,
  faStar,
  faShieldAlt,
  faUserClock,
  faChartLine,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

function DigitalServices() {
  return (
    <Container className='mt-5'>
      <h1 className='mb-5 text-center'>Digital Banking Services</h1>
      <p className='lead text-center mb-5'>
        Experience seamless banking with our cutting-edge digital solutions
        designed to make your financial life easier and more secure.
      </p>

      <Row className='gy-4'>
        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faGlobe} className='me-3 text-success' />
              Online Banking
            </h3>
            <p className='mb-4'>
              Access your accounts anytime, anywhere with our secure online
              banking platform. Manage your finances with ease from your
              computer.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ 24/7 account access and monitoring</li>
              <li className='mb-2'>✓ Bill payments and scheduled transfers</li>
              <li className='mb-2'>
                ✓ Real-time account alerts and notifications
              </li>
              <li className='mb-2'>✓ Secure message center for support</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='me-3 text-success'
              />
              Mobile Banking App
            </h3>
            <p className='mb-4'>
              Take your bank wherever you go with our feature-rich mobile
              banking application, designed for both iOS and Android devices.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Fingerprint and Face ID login</li>
              <li className='mb-2'>✓ Mobile check deposit</li>
              <li className='mb-2'>✓ Cardless ATM access</li>
              <li className='mb-2'>✓ Personal finance management tools</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faFileAlt} className='me-3 text-success' />
              E-Statements
            </h3>
            <p className='mb-4'>
              Go paperless with our electronic statement service. Access,
              download, and store your statements securely online.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Up to 7 years of statement history</li>
              <li className='mb-2'>✓ Secure PDF downloads</li>
              <li className='mb-2'>✓ Email notifications for new statements</li>
              <li className='mb-2'>✓ Environmentally friendly option</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faWallet} className='me-3 text-success' />
              Digital Wallet Integration
            </h3>
            <p className='mb-4'>
              Connect your accounts to popular digital wallets for quick, secure
              payments and seamless shopping experiences.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                ✓ Apple Pay, Google Pay, and Samsung Pay support
              </li>
              <li className='mb-2'>✓ Contactless payment options</li>
              <li className='mb-2'>✓ Instant purchase notifications</li>
              <li className='mb-2'>✓ Enhanced payment security</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className='mt-5 p-4 bg-light rounded shadow-sm'>
        <h4 className='mb-4'>
          <FontAwesomeIcon icon={faStar} className='me-3 text-success' />
          Benefits of Digital Banking
        </h4>
        <ul className='list-unstyled mb-0'>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faUserClock} className='me-3 text-success' />
            Bank at your convenience, 24/7 access
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faShieldAlt} className='me-3 text-success' />
            Enhanced security with encryption and biometric authentication
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faChartLine} className='me-3 text-success' />
            Real-time tracking of your finances
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faHeadset} className='me-3 text-success' />
            24/7 digital support and assistance
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default DigitalServices;
