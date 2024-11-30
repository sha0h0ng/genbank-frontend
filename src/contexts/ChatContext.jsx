import React, { createContext, useState, useContext, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Load chat history from localStorage
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    // Save chat history to localStorage whenever messages change
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const toggleChat = () => setShowChat(!showChat);

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, showChat, toggleChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
