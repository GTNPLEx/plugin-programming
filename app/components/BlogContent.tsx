'use client'

import React, { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy } from 'react-icons/fi';
import styles from 'app/styles/blog.module.css';

const BlogContent = () => {
  const codeRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const codeElement = codeRef.current;

    if (codeElement) {
      const code = codeElement.innerText;

      navigator.clipboard.writeText(code).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  return (
    <div className={styles['blog-container']}>
      <h1 className={styles['blog-title']}>
        Creating a VCA Plugin - Step-by-Step Guide
      </h1>

      <div className={styles['blog-content']}>
        <h2>Step 1: Define the Plugin Interface</h2>
        <p>
                creeate input field $userInput 

        </p>
        <h2>Step 2: Implement the Plugin Interface</h2>
        <p>
          Implement the plugin interface in C++:
          <SyntaxHighlighter language="cpp" style={atomDark}>
            {`// Implementation of the VCAPlugin interface
            class MyVCAPlugin : public VCAPlugin {
              public:
                MyVCAPlugin() : m_gain(1.0f) {}

                void setGain(float gain) override {
                  m_gain = gain;
                }

                float processSample(float input) override {
                  return input * m_gain;
                }

              private:
                float m_gain;
            };`}
          </SyntaxHighlighter>

          <div className={styles['copy-button']} onClick={handleCopyClick}>
            <FiCopy />
          </div>

          {isCopied && <p>Copied!</p>}
        </p>

        <h1>Conclusion</h1>
        <p>
          By following these steps, you can create a VCA plugin for audio processing in your application. Remember to customize the implementation and integration based on your specific requirements.
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
