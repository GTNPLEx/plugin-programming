import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import styles from "./codebox.module.css";
import CodeGen from "app/components/CodeBox/CodeGen";

const CodeBox = () => {
    const [code, setCode] = useState('');
    const editorRef = useRef(null);
  
    const handleCodeChange = (value) => {
      setCode(value);
    };
  
    const handleRunCode = () => {
      try {
        const result = eval(code);
        document.querySelector('.output-container').innerHTML = result;
      } catch (error) {
        document.querySelector('.output-container').innerHTML = error.message;
      }
    };
  
    const handleRefreshCode = () => {
        editorRef.current?.editor.setValue('');
        document.querySelector('.output-container').innerHTML = '';
      };
      
  
    return (
      <div className="p-4 bg-gray-100 rounded-md">
        <Editor
          height="300px"
          defaultLanguage="javascript"
          defaultValue="// Enter your code here"
          onChange={handleCodeChange}
          className="mb-4"
          ref={editorRef}
        />
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleRunCode}
          >
            Run
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={handleRefreshCode}
          >
            Refresh
          </button>
          <CodeGen code={code} />
        </div>
        <div className="output-container mt-4"></div>
      </div>
    );
  };
  
  export default CodeBox;