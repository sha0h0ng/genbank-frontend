import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faChartLine,
  faGlobe,
  faShieldAlt,
  faClock,
  faUsers,
  faAward,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <Container className='mt-5'>
      <h1 className='mb-5 text-center'>About GenBank</h1>
      <p className='lead text-center mb-5'>
        Your trusted financial partner since 1990. At GenBank, we combine
        innovative banking solutions with personalized service to help you
        achieve your financial goals.
      </p>

      <Row className='gy-4 mb-5'>
        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faHandshake}
                className='me-3 text-success'
              />
              Our Mission
            </h3>
            <p className='mb-4'>
              To provide accessible, innovative, and secure banking solutions
              that empower our customers to achieve their financial dreams while
              contributing to sustainable economic growth in our communities.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Customer-centric approach</li>
              <li className='mb-2'>✓ Financial inclusion</li>
              <li className='mb-2'>✓ Community development</li>
              <li className='mb-2'>✓ Sustainable banking practices</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faChartLine}
                className='me-3 text-success'
              />
              Our Growth
            </h3>
            <p className='mb-4'>
              From our humble beginnings to becoming a leading financial
              institution, GenBank has consistently grown while maintaining our
              commitment to excellence and customer satisfaction.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ 200+ branches nationwide</li>
              <li className='mb-2'>✓ 2M+ satisfied customers</li>
              <li className='mb-2'>✓ $50B+ in managed assets</li>
              <li className='mb-2'>✓ 25+ years of service excellence</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faGlobe} className='me-3 text-success' />
              Innovation & Technology
            </h3>
            <p className='mb-4'>
              We leverage cutting-edge technology to provide secure, efficient,
              and convenient banking services that meet the evolving needs of
              our customers.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Advanced digital banking platform</li>
              <li className='mb-2'>✓ 24/7 mobile banking access</li>
              <li className='mb-2'>✓ AI-powered security systems</li>
              <li className='mb-2'>✓ Contactless payment solutions</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faLeaf} className='me-3 text-success' />
              Sustainability Commitment
            </h3>
            <p className='mb-4'>
              We're committed to environmental stewardship and sustainable
              banking practices that create positive impact for future
              generations.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Green banking initiatives</li>
              <li className='mb-2'>✓ Paperless banking options</li>
              <li className='mb-2'>✓ Sustainable investment products</li>
              <li className='mb-2'>✓ Carbon-neutral operations goal</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className='mt-5 p-4 bg-light rounded shadow-sm'>
        <h4 className='mb-4'>
          <FontAwesomeIcon icon={faAward} className='me-3 text-success' />
          Why Choose GenBank?
        </h4>
        <ul className='list-unstyled mb-0'>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faShieldAlt} className='me-3 text-success' />
            Industry-leading security measures and fraud protection
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faClock} className='me-3 text-success' />
            24/7 customer support and banking access
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faUsers} className='me-3 text-success' />
            Community-focused banking relationship
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faHandshake} className='me-3 text-success' />
            Personalized financial solutions and guidance
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
