import React, { useState } from 'react';

const LivePreview = ({ code }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePreview = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button onClick={togglePreview}>Preview</button>
      {isOpen && (
        <div className="preview-window">
          <iframe srcDoc={code}></iframe>
        </div>
      )}
    </React.Fragment>
  );
};

const RunButton = ({ onClick, onError, code }) => {
  const handleClick = () => {
    try {
      onClick();
    } catch (error) {
      if (onError) {
        onError(error);
      }
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>Run Code</button>
      <LivePreview code={code} />
    </React.Fragment>
  );
};

export default RunButton;
