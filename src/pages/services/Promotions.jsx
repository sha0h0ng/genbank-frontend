import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faUsers,
  faCalendarAlt,
  faCreditCard,
  faStar,
  faPercent,
  faCoins,
  faHandHoldingUsd,
  faAward,
} from '@fortawesome/free-solid-svg-icons';

function Promotions() {
  return (
    <Container className='mt-5'>
      <h1 className='mb-5 text-center'>Special Promotions</h1>
      <p className='lead text-center mb-5'>
        Take advantage of our exclusive offers and promotions designed to
        maximize your banking benefits and reward your loyalty.
      </p>

      <Row className='gy-4'>
        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faGift} className='me-3 text-success' />
              New Account Bonus
            </h3>
            <p className='mb-4'>
              Start your banking journey with us and earn attractive welcome
              bonuses when you open eligible accounts and meet qualifying
              criteria.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                ✓ Up to $300 welcome bonus for new checking accounts
              </li>
              <li className='mb-2'>
                ✓ Additional $200 for setting up direct deposit
              </li>
              <li className='mb-2'>
                ✓ Special rates on savings accounts for new customers
              </li>
              <li className='mb-2'>
                ✓ Waived maintenance fees for the first year
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon icon={faUsers} className='me-3 text-success' />
              Referral Rewards
            </h3>
            <p className='mb-4'>
              Share the benefits of banking with us and earn rewards when your
              friends and family join our banking family.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>✓ Earn $50 for each successful referral</li>
              <li className='mb-2'>✓ Your referred friend gets $50 too</li>
              <li className='mb-2'>✓ No limit on number of referrals</li>
              <li className='mb-2'>
                ✓ Track your referrals through online banking
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className='me-3 text-success'
              />
              Seasonal Savings Rates
            </h3>
            <p className='mb-4'>
              Take advantage of our limited-time seasonal promotions with
              enhanced interest rates and special terms.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                ✓ Special CD rates during promotional periods
              </li>
              <li className='mb-2'>✓ Holiday savings account bonuses</li>
              <li className='mb-2'>✓ Summer savings challenges with rewards</li>
              <li className='mb-2'>✓ Tax season preparation incentives</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className='p-4 h-100 border rounded shadow-sm'>
            <h3 className='h4 mb-4'>
              <FontAwesomeIcon
                icon={faCreditCard}
                className='me-3 text-success'
              />
              Credit Card Offers
            </h3>
            <p className='mb-4'>
              Explore our credit card promotions with attractive rewards,
              cashback options, and special introductory rates.
            </p>
            <ul className='list-unstyled ps-3'>
              <li className='mb-2'>
                ✓ 0% APR for 15 months on balance transfers
              </li>
              <li className='mb-2'>✓ Up to 5% cashback on select categories</li>
              <li className='mb-2'>✓ 50,000 bonus points welcome offer</li>
              <li className='mb-2'>✓ Annual fee waived for the first year</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className='mt-5 p-4 bg-light rounded shadow-sm'>
        <h4 className='mb-4'>
          <FontAwesomeIcon icon={faStar} className='me-3 text-success' />
          Additional Benefits
        </h4>
        <ul className='list-unstyled mb-0'>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faPercent} className='me-3 text-success' />
            Rate discounts on loans for existing customers
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faCoins} className='me-3 text-success' />
            Loyalty rewards program points
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              className='me-3 text-success'
            />
            Bundle and save across multiple products
          </li>
          <li className='mb-3'>
            <FontAwesomeIcon icon={faAward} className='me-3 text-success' />
            Premium benefits for relationship banking
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Promotions;
