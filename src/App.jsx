import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import LoansMortgages from './pages/services/LoansMortgages';
import Accounts from './pages/services/Accounts';
import DigitalServices from './pages/services/DigitalServices';
import Promotions from './pages/services/Promotions';
import Chat from './components/Chat';
import { ChatProvider, useChat } from './contexts/ChatContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from './supabaseClient';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  return (
    <ChatProvider>
      <Router>
        <div className='App d-flex flex-column min-vh-100'>
          <Header user={user} />
          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              <Route
                path='/dashboard'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />
              <Route
                path='/services/loans-mortgages'
                element={<LoansMortgages />}
              />
              <Route path='/services/accounts' element={<Accounts />} />
              <Route path='/services/digital' element={<DigitalServices />} />
              <Route path='/services/promotions' element={<Promotions />} />
            </Routes>
          </main>
          <Footer />
          <ChatButton />
        </div>
      </Router>
    </ChatProvider>
  );
}

function ChatButton() {
  const { showChat, toggleChat } = useChat();

  return (
    <>
      <div
        className='position-fixed bottom-0 end-0 m-3'
        style={{ zIndex: 1000 }}
      >
        <Button
          variant='primary'
          className='rounded-circle'
          style={{ width: '60px', height: '60px' }}
          onClick={toggleChat}
        >
          <FontAwesomeIcon icon={faComment} />
        </Button>
      </div>
      {showChat && <Chat />}
    </>
  );
}

export default App;
