import React from 'react';
import { FiCopy, FiRefreshCcw } from 'react-icons/fi';
import styles from 'app/components/BlogContent/blog.module.css';

const Replay = ({ response }) => {
  const handleCopyText = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(response)
        .then(() => {
          console.log('Code snippet copied to clipboard');
        })
        .catch((error) => {
          console.error('Failed to copy code snippet to clipboard:', error);
        });
    }
  };

  const handleRefreshCode = () => {
    setCodeSnippet(response);
  };

  return (
    <div>
      <h2>Response:</h2>
      <pre>{response}</pre>
      <div className={styles['code-textarea']}>
        <div className={styles['copy-button']} onClick={handleCopyText}>
          <FiCopy />
        </div>
        <div className={styles['refresh-button']} onClick={handleRefreshCode}>
          <FiRefreshCcw />
        </div>
      </div>
    </div>
  );
};

export default Replay;
