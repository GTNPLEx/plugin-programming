'use client'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from 'app/components/trainer.module.css';

const Trainer = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState(39);
  const [messages, setMessages] = useState([]);
  const [typewriterText, setTypewriterText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const updateMessage = async () => {
    if (userName.trim() !== '') {
      try {
        await axios.post('/api/messages', { userName, age });
        setSuccessMessage('Message updated successfully!');
        fetchMessages(); // Fetch updated messages from the server
      } catch (error) {
        console.error('Error updating message:', error);
        setErrorMessage('Failed to update message');
      }
    } else {
      setErrorMessage('Please enter a valid name!');
    }
  };

  const typeWriter = () => {
    const text = `Hello ${userName}, I'm Eva. Your age is ${age}.`;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypewriterText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetchMessages(); // Fetch initial messages from the server
    typeWriter();
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.box1}`} id="messageBox">
        {messages}
      </div>
      <div className={`${styles.box} ${styles.box2}`} id="timestampBox">
        {/* Timestamp content */}
      </div>
      <div className={`${styles.box} ${styles.box3}`} id="nameAgeBox">
        Name: {userName}, Age: {age}
      </div>
      <div className={styles.containerBox5}>
        <div className={`${styles.box} ${styles.box5}`} id="typewriterBox">
          {isTyping ? typewriterText : ''}
        </div>
        <div className={styles.balloon}>
          {/* Balloon content */}
        </div>
      </div>
      <div className={styles.refreshButton} onClick={refreshPage}>
        <i className="fas fa-sync-alt"></i>
      </div>
      <div className={styles.submitContainer}>
        <div className={styles.inputBox}>
          <input
            type="text"
            id="userNameInput"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.submit}>
          <button onClick={updateMessage}>Submit</button>
        </div>
      </div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}
    </div>
  );
};

export default Trainer;
