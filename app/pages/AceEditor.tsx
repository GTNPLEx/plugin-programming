import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';

const AceEditorComponent = ({ selectedLanguage, codeSnippet, handleCodeChange }) => {
  const handleLanguageChange = (event) => {
    handleLanguageChange(event.target.value);
  };

  return (
    <div>
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
      </div>
    </div>
  );
};

export default AceEditorComponent;
