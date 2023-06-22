'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import styles from 'app/components/trainer.module.css';

const Trainer = () => {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const inputRef = useRef(null);

  const fetchData = async () => {
    try {
      // Fetch initial messages
      const messagesResponse = await axios.get('/api/messages');
      const messages = messagesResponse.data;

      // Fetch clock information
      const clockResponse = await axios.get('/api/ClockNews.js'); // Replace with the appropriate API endpoint
      const clockData = clockResponse.data;

      // Update the component state with the fetched data
      // For example, you can set the messages and clock information in the state variables
      // setMessages(messages);
      // setClockData(clockData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const typeWriter = useCallback(() => {
    let conversationText: string[] = [];

    if (userName.trim() !== '') {
      conversationText.push(`Nice to meet you, ${userName}.`);
    }

    if (age.trim() !== '') {
      conversationText.push(`I see you're ${age} years old.`);
    }

    if (message.trim() !== '') {
      conversationText.push(`Your last message was: "${message}".`);
    }

    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < conversationText.length) {
        setTypewriterText(conversationText.slice(0, index + 1).join(' '));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setShowResponse(true);
        }, 2000); // Delay of 2 seconds before displaying the response
      }
    }, 100);
  }, [userName, age, message]);

  const restartTypewriter = useCallback(() => {
    setIsTyping(true);
    setTypewriterText('');
    setShowResponse(false);
  }, []);

  const refreshPage = () => {
    setUserName('');
    setAge('');
    setMessage('');
    restartTypewriter();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isTyping]);

  useEffect(() => {
    typeWriter();
  }, [isTyping, typeWriter]);

  useEffect(() => {
    restartTypewriter();
  }, [userName, age, message, restartTypewriter]);

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.box5}`} id="typewriterBox">
        <span className={isTyping ? styles.activeText : ''}>
          {typewriterText}
          {!isTyping && userName && age && message && (
            <>
              <br />
              <span>This is what Ai Know :</span>
              <br />
              <span>Hey: {userName}</span>
              <br />
              <span>Your age is: {age}</span>
              <br />
              <span>Message: {message}</span>
            </>
          )}
        </span>
      </div>

      <div className={styles.balloon} style={{ left: 0 }}>
        <span className={styles.balloonText}>{isTyping ? typewriterText : ''}</span>
      </div>
      <div className={styles.submitContainer}>
        <div className={styles.inputBox}>
          <input
            type="text"
            id="userNameInput"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            ref={inputRef}
          />
          <input
            type="text"
            id="ageInput"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            id="messageInput"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.submit}>
          <button onClick={refreshPage}>Submit</button>
        </div>
      </div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}
    </div>
  );
};

export default Trainer;
