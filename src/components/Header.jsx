import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { createClient } from '@supabase/supabase-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Header({ user }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar bg='light' expand='lg' expanded={expanded} className='mb-3'>
      <Container>
        <Navbar.Brand as={Link} to='/' onClick={closeNavbar}>
          GenBank
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/' onClick={closeNavbar}>
              Home
            </Nav.Link>
            <NavDropdown title='Services' id='basic-nav-dropdown'>
              <NavDropdown.Item
                as={Link}
                to='/services/loans-mortgages'
                onClick={closeNavbar}
              >
                Loans & Mortgages
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/services/accounts'
                onClick={closeNavbar}
              >
                Savings & Current Accounts
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/services/digital'
                onClick={closeNavbar}
              >
                Digital Services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/services/promotions'
                onClick={closeNavbar}
              >
                Promotions
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to='/dashboard' onClick={closeNavbar}>
                  Dashboard
                </Nav.Link>
                <Button
                  variant='outline-danger'
                  onClick={() => {
                    handleLogout();
                    closeNavbar();
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant='outline-primary'
                as={Link}
                to='/login'
                onClick={closeNavbar}
              >
                <FontAwesomeIcon icon={faSignInAlt} className='me-2' />
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
