import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import { FaMoon, FaSun } from 'react-icons/fa';
import Guide from 'app/components/Guide/Guide';
import CodeBox from "app/components/CodeBox/CodeBox";

function AceEditorComponent({ reply, handleReturn }) {
  const [theme, setTheme] = useState('light');
  const [showGuide, setShowGuide] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const editorTheme = theme === 'dark' ? 'monokai' : 'github';

  const handleGuideClose = () => {
    setShowGuide(false);
  };

  const handleGuideClick = () => {
    setShowGuide(!showGuide);
  };

  const handleSearch = (query) => {
    // Logic to handle the search action with the provided query
    console.log('Search query:', query);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="relative inline-block w-12 h-6">
        <label className="toggle-switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} className="toggle-checkbox" />
          <span className="slider round">
            {theme === 'dark' ? <FaMoon className="text-yellow-300" /> : <FaSun className="text-yellow-500" />}
          </span>
        </label>
      </div>
      <AceEditor
        value={reply}
        readOnly={true}
        mode="javascript"
        theme={editorTheme}
        fontSize={14}
        showPrintMargin={false}
        width="100%"
        height="200px"
      />
      <button onClick={handleGuideClick} className="guide-button mt-2 px-2 py-1 rounded bg-blue-500 text-white text-sm">
        Guide
      </button>
      <button onClick={handleGuideClick} className="guide-button mt-2 px-2 py-1 rounded bg-blue-500 text-white text-sm">
        Help
      </button>
      <div><CodeBox /></div>
      
      {showGuide && (
        <div className="guide-container">
          <Guide query={searchQuery} onClose={handleGuideClose} onSearch={handleSearch} />
          <div className="guide-search mt-2">
            <input
              type="text"
              placeholder="Search query"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="border border-gray-300 rounded-lg p-2 mr-2"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSearch(searchQuery)}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AceEditorComponent;
