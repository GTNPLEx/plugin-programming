import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Document from 'src/components/Document.tsx';
import styles from 'src/components/welcome.module.css'; // Import the CSS module file

const WelcomeText = ({ onClose }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  const text = "Welcome to the application!"; // Define the text content here

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Finish typing animation
      }
    };

    const timer = setInterval(typeText, 100); // Type one character every 100ms

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const handleOpenDocument = () => {
    setIsDocumentOpen(true);
  };

  const handleCloseDocument = () => {
    setIsDocumentOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={styles.banner}>
        <h1 className="text-4xl">Welcome to our Application</h1>
      </div>
      <p className={`text-2xl mb-6 ${styles['welcome-text']}`}>{displayText}</p>
      <div className={`search-box ${styles['search-box']}`}>
        <SearchBar />
        <button
          className={`open-document-button ${styles['open-document-button']}`}
          onClick={handleOpenDocument}
        >
          Open Document
        </button>
      </div>
      {isDocumentOpen && <Document onClose={handleCloseDocument} />}
    </div>
  );
};

export default WelcomeText;
