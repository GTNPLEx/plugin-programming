
'use client'
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { FiCopy, FiPlay, FiRefreshCcw } from 'react-icons/fi';
import AceEditorComponent from '../pages/AceEditor';
import styles from 'app/components/BlogContent/blog.module.css';

const BlogContent = () => {
  const [codeSnippet, setCodeSnippet] = useState('// Your code snippet');
  const [selectedLanguage, setSelectedLanguage] = useState('c_cpp');

  const handleCopyText = () => {
    // Code to handle copying the code snippet to the clipboard
  };

  const handleCodeChange = (newCodeSnippet) => {
    setCodeSnippet(newCodeSnippet);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleRunCode = () => {
    // Code to handle running the code snippet
  };

  const handleRefreshCode = () => {
    setCodeSnippet('// Your code snippet');
  };

  return (
    <div className={styles['blog-container']}>
      {/* Rest of the component */}
      {/* Code Snippet */}
      <h2 className={styles['blog-subtitle']}>Code Snippet</h2>
      <div className={styles['code-editor']}>
        {/* Code actions */}
        <div className={styles['code-actions']}>
          {/* Copy button */}
          <button className={styles['action-button']} onClick={handleCopyText}>
            <FiCopy />
          </button>
          {/* Language selector */}
          <AceEditorComponent
            selectedLanguage={selectedLanguage}
            codeSnippet={codeSnippet}
            handleCodeChange={handleCodeChange}
            handleLanguageChange={handleLanguageChange}
          />
          {/* Run code button */}
          <button className={styles['action-button']} onClick={handleRunCode}>
            <FiPlay />
          </button>
          {/* Refresh code button */}
          <button className={styles['action-button']} onClick={handleRefreshCode}>
            <FiRefreshCcw />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
