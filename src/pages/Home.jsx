import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  FaShieldAlt,
  FaMobileAlt,
  FaPiggyBank,
  FaChartLine,
} from 'react-icons/fa';

function Home() {
  return (
    <div className='home'>
      {/* Hero Section */}
      <div className='bg-success text-white py-5'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <h1 className='display-4 fw-bold'>Welcome to GenBank</h1>
              <p className='lead'>
                Your trusted partner for all your financial needs
              </p>
            </Col>
            <Col md={6}>
              <img
                src='/placeholder.svg?height=300&width=500'
                alt='Banking illustration'
                className='img-fluid rounded'
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className='py-5'>
        <h2 className='text-center mb-5'>Why Choose GenBank?</h2>
        <Row>
          {[
            {
              icon: FaShieldAlt,
              title: 'Secure Banking',
              text: 'State-of-the-art security measures to protect your assets',
            },
            {
              icon: FaMobileAlt,
              title: 'Mobile Banking',
              text: 'Manage your accounts anytime, anywhere with our mobile app',
            },
            {
              icon: FaPiggyBank,
              title: 'Savings Accounts',
              text: 'Competitive interest rates to help your money grow',
            },
            {
              icon: FaChartLine,
              title: 'Investment Options',
              text: 'Diverse portfolio options to meet your financial goals',
            },
          ].map((feature, index) => (
            <Col md={3} key={index} className='mb-4'>
              <Card className='h-100 text-center'>
                <Card.Body>
                  <feature.icon className='text-success mb-3' size={48} />
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div className='bg-light py-5'>
        <Container>
          <Row className='align-items-center'>
            <Col md={8}>
              <h2>Ready to start your financial journey?</h2>
              <p className='lead'>
                Open an account today and experience the GenBank difference.
              </p>
            </Col>
            <Col md={4} className='text-md-end'>
              <Link to='/about'>
                <Button variant='success' size='lg'>
                  Start Journey Here
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonial Section */}
      <Container className='py-5'>
        <h2 className='text-center mb-5'>What Our Customers Say</h2>
        <Row>
          {[
            {
              text: 'GenBank has transformed the way I manage my finances. Their mobile app is intuitive and their customer service is top-notch!',
              author: 'Sarah J., Customer since 2019',
            },
            {
              text: "I've been with GenBank for over a decade now. Their investment options have helped me secure a comfortable retirement.",
              author: 'Michael R., Customer since 2010',
            },
            {
              text: 'As a small business owner, I appreciate the personalized service and financial advice I receive from GenBank.',
              author: 'Emily L., Customer since 2015',
            },
          ].map((testimonial, index) => (
            <Col md={4} key={index} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <Card.Text>"{testimonial.text}"</Card.Text>
                  <footer className='blockquote-footer mt-3'>
                    {testimonial.author}
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
