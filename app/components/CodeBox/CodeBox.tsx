import { useState, useRef } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';

const CodeBox = () => {
  const [code, setCode] = useState('');
  const editorRef = useRef<any>(null);

  const handleCodeChange: OnChange = (value: string | undefined) => {
    setCode(value || ''); // Use an empty string as the default value if `value` is `undefined`
  };

  const handleRunCode = () => {
    // Code to run when the "Run Code" button is clicked
    console.log("Running code:", code);
  };

  const handleRefreshCode = () => {
    editorRef.current?.editor.setValue('');
    const outputContainer = document.querySelector('.output-container');
    if (outputContainer) {
      outputContainer.innerHTML = '';
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <Editor
        height="300px"
        defaultLanguage="javascript"
        defaultValue="// Enter your code here"
        onChange={handleCodeChange}
        className="mb-4"
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
        {/* <CodeGen code={code} /> */}
      </div>
      <div className="output-container mt-4"></div>
    </div>
  );
};

export default CodeBox;
