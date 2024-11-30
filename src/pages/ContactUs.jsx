import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faClock,
  faPhone,
  faGlobe,
  faHeadset,
  faComments,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <Container className='mt-5'>
      <h1 className='mb-5 text-center'>Contact Us</h1>
      <p className='lead text-center mb-5'>
        We're here to help! Reach out to us through any of our communication
        channels for assistance with your banking needs.
      </p>

      <Row className='gy-4'>
        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='me-3 text-success'
              />
              Email Us
            </h3>
            <p className='mb-4'>
              For general inquiries and support, please email us at:
            </p>
            <p className='mb-4 fw-bold'>contact-us@genbank.sg</p>
            <p className='text-muted'>
              We strive to respond to all emails within 24 business hours.
            </p>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faPhone} className='me-3 text-success' />
              Call Us
            </h3>
            <p className='mb-4'>24/7 Customer Service Hotline:</p>
            <p className='mb-4 fw-bold'>1800-GENBANK (1800-436-2265)</p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ General Banking: Option 1</li>
              <li className='mb-2'>✓ Credit Cards: Option 2</li>
              <li className='mb-2'>✓ Loans & Mortgages: Option 3</li>
              <li className='mb-2'>✓ Digital Banking Support: Option 4</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='me-3 text-success'
              />
              Main Branch
            </h3>
            <p className='mb-4'>Visit our main branch at:</p>
            <p className='mb-4 fw-bold'>
              1 Raffles Place
              <br />
              #01-01 One Raffles Place
              <br />
              Singapore 048616
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                <FontAwesomeIcon icon={faClock} className='me-2 text-success' />
                Mon-Fri: 9:30 AM - 4:30 PM
              </li>
              <li className='mb-2'>
                <FontAwesomeIcon icon={faClock} className='me-2 text-success' />
                Sat: 9:30 AM - 1:00 PM
              </li>
              <li className='mb-2'>
                <FontAwesomeIcon icon={faClock} className='me-2 text-success' />
                Sun & Public Holidays: Closed
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faHeadset} className='me-3 text-success' />
              Other Ways to Connect
            </h3>
            <ul className='list-unstyled ps-3'>
              <li className='mb-3'>
                <FontAwesomeIcon icon={faGlobe} className='me-3 text-success' />
                Online Banking: www.genbank.sg
              </li>
              <li className='mb-3'>
                <FontAwesomeIcon
                  icon={faComments}
                  className='me-3 text-success'
                />
                Live Chat: Available in Mobile App
              </li>
              <li className='mb-3'>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className='me-3 text-success'
                />
                Find a Branch: Branch Locator
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className='mt-5 p-4 bg-light rounded shadow-sm'>
        <h4 className='mb-4'>
          <FontAwesomeIcon icon={faClock} className='me-3 text-success' />
          Response Times
        </h4>
        <ul className='list-unstyled mb-0'>
          <li className='mb-3'>✓ Email: Within 24 business hours</li>
          <li className='mb-3'>
            ✓ Phone: Average wait time less than 5 minutes
          </li>
          <li className='mb-3'>
            ✓ Live Chat: Instant connection during business hours
          </li>
          <li className='mb-3'>✓ Social Media: Within 2 business hours</li>
        </ul>
      </div>
    </Container>
  );
}

export default Contact;
