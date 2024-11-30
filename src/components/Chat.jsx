import { useState, useRef, useEffect } from 'react';
import { Card, Form, Button, CloseButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { useChat } from '../contexts/ChatContext';

function Chat() {
  const { messages, addMessage, toggleChat } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || loading) return;

    setLoading(true);
    const userMessage = { text: newMessage, sender: 'user' };
    addMessage(userMessage);

    try {
      const response = await fetch('http://127.0.0.1:5050/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: newMessage,
          template_type: 'bank_teller',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();

      const apiMessage = { text: data.response, sender: 'api' };
      addMessage(apiMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        text: 'Failed to send message. Please try again.',
        sender: 'error',
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
      setNewMessage('');
    }
  };

  return (
    <Card
      className='position-fixed bottom-0 end-0 m-3'
      style={{ width: '400px', height: '500px', zIndex: 1001 }}
    >
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <FontAwesomeIcon icon={faRobot} />
        Chat with GenBot
        <CloseButton onClick={toggleChat} />
      </Card.Header>
      <Card.Body className='overflow-auto px-3 py-2'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === 'user' ? 'text-end' : 'text-start'
            }`}
          >
            <span
              className={`d-inline-block ${
                message.sender === 'user'
                  ? 'bg-primary text-white'
                  : message.sender === 'api'
                  ? 'bg-light text-dark'
                  : 'bg-danger text-white'
              }`}
              style={{
                maxWidth: '80%',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '12px',
                fontSize: '14px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                marginBottom: '8px',
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </Card.Body>
      <Card.Footer>
        <Form onSubmit={handleSendMessage}>
          <Form.Group className='d-flex'>
            <Form.Control
              type='text'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={
                loading ? 'Waiting for reply...' : 'Type a message...'
              }
              className='me-2'
              disabled={loading}
            />
            <Button type='submit' variant='primary' disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Form.Group>
        </Form>
      </Card.Footer>
    </Card>
  );
}

export default Chat;
