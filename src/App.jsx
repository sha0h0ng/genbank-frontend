import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LoansMortgages from './pages/services/LoansMortgages';
import Accounts from './pages/services/Accounts';
import DigitalServices from './pages/services/DigitalServices';
import Promotions from './pages/services/Promotions';
import Chat from './components/Chat';
import { ChatProvider, useChat } from './contexts/ChatContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChatProvider>
      <Router>
        <div className='App d-flex flex-column min-vh-100'>
          <Header />
          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
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
