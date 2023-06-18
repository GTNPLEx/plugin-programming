import React from 'react';

function Document({ onClose }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="bg-white rounded-lg p-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to Use the SearchBar</h2>
          <div className="text-left">
            <p className="mb-4">
              <strong>Welcome to ChatGPT</strong> - a powerful assistant for all your needs. Here&apos;s how you can use ChatGPT effectively:
            </p>
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>Access the ChatGPT application by visiting [website URL].</li>
              <li>Familiarize yourself with the interface and the available features.</li>
            </ol>
            <h3 className="text-lg font-semibold mb-2">Using ChatGPT</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>Enter your query or request in the search bar.</li>
              <li>Click the &quot;Search&quot; button or press Enter to initiate the search.</li>
              <li>ChatGPT will process your query and provide a response.</li>
              <li>Interact with ChatGPT by entering follow-up questions or requests.</li>
            </ol>
            <h3 className="text-lg font-semibold mb-2">Tips for Better Results</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Be specific with your queries to get more accurate responses.</li>
              <li>Use natural language and be conversational in your requests.</li>
              <li>If you encounter any issues or errors, please contact our support team.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Additional Resources</h3>
            <ul className="list-disc list-inside mb-4">
              <li>For more information and updates, visit our website [website URL].</li>
              <li>For technical support, please email [support email].</li>
              <li>Follow us on social media [social media links] for news and announcements.</li>
            </ul>
            <p>We hope you find ChatGPT helpful and enjoy your experience!</p>
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

export default Document;
