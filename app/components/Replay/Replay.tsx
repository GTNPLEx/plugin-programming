import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'; // Import the desired mode
import 'ace-builds/src-noconflict/theme-github'; // Import the desired theme


function Replay({ reply, handleReturn }) {
    return (
      <div className="popup-window">
        <div className="code-editor">
          {/* Code snippet editor */}
          {/* ... */}
          <AceEditor
            value={reply}
            readOnly={true}
            mode="javascript" // Set the desired mode
            theme="github" // Set the desired theme
            fontSize={14}
            showPrintMargin={false}
            width="100%"
            height="200px"
          />
        </div>
        <button
          onClick={handleReturn}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Return
        </button>
      </div>
    );
  }
  
  export default Replay;
  
