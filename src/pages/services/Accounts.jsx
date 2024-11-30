import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPiggyBank,
  faCreditCard,
  faBuilding,
  faGraduationCap,
  faStar,
  faClock,
  faShieldAlt,
  faHeadset,
  faPercent,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

function Accounts() {
  return (
    <div className='container mt-5'>
      <h1 className='mb-5 text-center'>Our Services</h1>

      <div className='service-section mb-5'>
        <h2 className='mb-4 text-center'>Savings & Current Accounts</h2>
        <p className='lead text-center mb-5'>
          Choose from our comprehensive range of accounts designed to meet your
          unique financial needs and help you achieve your goals.
        </p>

        <div className='row mt-4 gy-4'>
          <div className='col-md-6'>
            <div className='p-4 h-100 border rounded shadow-sm'>
              <h3 className='h4 mb-4'>
                <FontAwesomeIcon
                  icon={faPiggyBank}
                  className='me-3 text-success'
                />
                High-Yield Savings Accounts
              </h3>
              <p className='mb-4'>
                Maximize your savings with our competitive interest rates and
                zero maintenance fees. Enjoy the flexibility of online banking
                while your money grows faster.
              </p>
              <ul className='list-unstyled ps-3'>
                <li className='mb-2'>✓ Up to 3.5% annual interest rate</li>
                <li className='mb-2'>✓ No minimum balance requirements</li>
                <li className='mb-2'>✓ Free online and mobile banking</li>
                <li className='mb-2'>✓ Monthly interest payouts</li>
              </ul>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='p-4 h-100 border rounded shadow-sm'>
              <h3 className='h4 mb-4'>
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className='me-3 text-success'
                />
                Current/Checking Accounts
              </h3>
              <p className='mb-4'>
                Experience hassle-free daily banking with our feature-rich
                checking accounts. Perfect for managing your regular expenses
                and transactions.
              </p>
              <ul className='list-unstyled ps-3'>
                <li className='mb-2'>
                  ✓ Free debit card with worldwide acceptance
                </li>
                <li className='mb-2'>✓ Unlimited transactions</li>
                <li className='mb-2'>✓ Bill pay and automatic payments</li>
                <li className='mb-2'>✓ Overdraft protection available</li>
              </ul>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='p-4 h-100 border rounded shadow-sm'>
              <h3 className='h4 mb-4'>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className='me-3 text-success'
                />
                Business Accounts
              </h3>
              <p className='mb-4'>
                Tailored solutions for businesses of all sizes. From startups to
                established enterprises, we have the right account for your
                business needs.
              </p>
              <ul className='list-unstyled ps-3'>
                <li className='mb-2'>✓ Dedicated business banking support</li>
                <li className='mb-2'>✓ Integration with accounting software</li>
                <li className='mb-2'>✓ Business credit card options</li>
                <li className='mb-2'>✓ Merchant services available</li>
              </ul>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='p-4 h-100 border rounded shadow-sm'>
              <h3 className='h4 mb-4'>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className='me-3 text-success'
                />
                Student Accounts
              </h3>
              <p className='mb-4'>
                Start your financial journey with our student-friendly accounts.
                Enjoy special benefits and learn to manage your money
                responsibly.
              </p>
              <ul className='list-unstyled ps-3'>
                <li className='mb-2'>✓ No monthly maintenance fees</li>
                <li className='mb-2'>✓ Student-exclusive rewards</li>
                <li className='mb-2'>✓ Financial literacy resources</li>
                <li className='mb-2'>
                  ✓ Mobile banking app with budgeting tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-5 p-4 bg-light rounded shadow-sm'>
          <h4 className='mb-4'>
            <FontAwesomeIcon icon={faStar} className='me-3 text-success' />
            Why Choose Our Banking Services?
          </h4>
          <ul className='list-unstyled mb-0'>
            <li className='mb-3'>
              <FontAwesomeIcon icon={faClock} className='me-3 text-success' />
              24/7 online and mobile banking access
            </li>
            <li className='mb-3'>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className='me-3 text-success'
              />
              Secure and encrypted transactions
            </li>
            <li className='mb-3'>
              <FontAwesomeIcon icon={faHeadset} className='me-3 text-success' />
              Dedicated customer support
            </li>
            <li className='mb-3'>
              <FontAwesomeIcon icon={faPercent} className='me-3 text-success' />
              Competitive rates and minimal fees
            </li>
            <li className='mb-3'>
              <FontAwesomeIcon
                icon={faLandmark}
                className='me-3 text-success'
              />
              Extensive ATM network
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
