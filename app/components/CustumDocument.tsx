'use client'


import React, { MouseEventHandler, useEffect } from 'react';

interface CustomDocumentProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

function CustomDocument({ onClose }: CustomDocumentProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access window-related functionality here
      // Example: Add event listeners, interact with the DOM, etc.
    }
  }, []);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="bg-white rounded-lg p-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to Use the SearchBar</h2>
          <div className="text-left">
            {/* Document content goes here */}
          </div>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomDocument;
