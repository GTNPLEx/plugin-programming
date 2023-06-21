import React from 'react';
import AceEditor from 'react-ace';

interface AceEditorComponentProps {
  selectedLanguage: string;
  codeSnippet: string;
  handleCodeChange: (newCodeSnippet: string) => void;
}

const AceEditorComponent: React.FC<AceEditorComponentProps> = ({
  selectedLanguage,
  codeSnippet,
  handleCodeChange,
}) => {
  return (
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
  );
};

export default AceEditorComponent;
