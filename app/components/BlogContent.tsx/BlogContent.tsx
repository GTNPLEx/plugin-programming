'use client'

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiPlay, FiRefreshCcw } from 'react-icons/fi';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';
import styles from './blog.module.css';

const BlogContent = () => {
  const [codeSnippet, setCodeSnippet] = useState('// Your code snippet');
  const [selectedLanguage, setSelectedLanguage] = useState('c_cpp');

  const handleCopyText = () => {
    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet);
    }
  };

  if (typeof window !== 'undefined') {
    const previewWindow = window.open();
    if (previewWindow) {
      previewWindow.document.open();
      previewWindow.document.write(codeSnippet);
      previewWindow.document.close();
    } else {
      // Handle the case when opening the window fails
      console.log('Failed to open preview window');
    }
  }
  
  

  const handleCodeChange = (newCodeSnippet) => {
    setCodeSnippet(newCodeSnippet);
  };

  const handleRefreshCode = () => {
    setCodeSnippet('// Your code snippet');
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className={styles['blog-container']}>
      <h1 className={styles['blog-title']}>
        Creating a VCA Plugin - Step-by-Step Guide
      </h1>
  
      <div className={styles['blog-content']}>
        <h2>Step 1: Define the Plugin Interface</h2>
        <p></p>
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
                };`
                    }
            </SyntaxHighlighter>
  
        <h2>Step 3: Compile the Plugin</h2>
        <p>
          Compile the plugin code into a shared library or DLL.
          For example, on Linux:
        </p>
        <SyntaxHighlighter language="bash" style={atomDark}>
          {`g++ -shared -fPIC -o libmyvcaplugin.so myvcaplugin.cpp`}
        </SyntaxHighlighter>
  
        <h2>Step 4: Load the Plugin</h2>
        <p>
          Load the plugin in the application.
          Here's an example using the Web Audio API in a React app:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {`const loadPlugin = async () => {
              const response = await fetch('/path/to/libmyvcaplugin.so');
              const buffer = await response.arrayBuffer();
              const module = await WebAssembly.instantiate(buffer);
              const plugin = new module.MyVCAPlugin();
              return plugin;
            };`
            }
        </SyntaxHighlighter>
  
        <h2>Step 5: Use the Plugin</h2>
        <p>
          Interact with the plugin and integrate it into the audio processing pipeline:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {`const audioContext = new AudioContext();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const plugin = await loadPlugin();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            plugin.setGain(0.5);
            
            gainNode.gain.value = plugin.processSample(1.0);
            
            oscillator.start();`
          }
        </SyntaxHighlighter>
  
        <h2>Step 6: Unload the Plugin</h2>
        <p>
          When done using the plugin, unload it using the appropriate mechanism:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {`const unloadPlugin = async (plugin) => {
              // No need to unload the plugin in WebAssembly
            };
            
            const plugin = await loadPlugin();
            
            // Use the plugin...
            
            await unloadPlugin(plugin);`
          }
        </SyntaxHighlighter>
  
        <h1>Conclusion</h1>
        <p>
          By following these steps, you can create a VCA plugin for audio processing in your application. Remember to customize the implementation and integration based on your specific requirements.
        </p>
      </div>
  
    {/* Code Snippet */}
    <h2 className={styles['blog-subtitle']}>Code Snippet</h2>
    <div className={styles['code-editor']}>
      <div className={styles['code-actions']}>
        <button className={styles['action-button']} onClick={handleCopyText}>
          <FiCopy />
        </button>
        <button className={styles['action-button']} onClick={handleRunCode}>
          <FiPlay />
        </button>
        <button className={styles['action-button']} onClick={handleRefreshCode}>
          <FiRefreshCcw />
        </button>
      </div>
      <div className={styles['language-selector']}>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="c_cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
      </div>
      <div className={styles['code-textarea']}>
        <AceEditor
          mode={selectedLanguage}
          theme="github"
          value={codeSnippet}
          onChange={handleCodeChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <div className={styles['copy-button']} onClick={handleCopyText}>
          <FiCopy />
        </div>
      </div>
      <div className={styles['code-snippet']}>
        <SyntaxHighlighter language={selectedLanguage} style={atomDark}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  </div>
  </div>
  );
};
export default BlogContent;

  
  



