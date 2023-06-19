'use client'

import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Assuming you have a website context and list of website items
  const websiteContext = ['Home', 'About', 'Services', 'Contact'];
  const filteredWebsiteContext = websiteContext.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <aside className={`mb-8 ${isDropdownOpen ? 'pb-64' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xl font-bold">Sidebar</span>
        </div>
        <div className="relative">
          <button
            className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
            onClick={handleToggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 z-10 w-40 p-2 bg-white border rounded-md shadow-md">
              <input
                type="text"
                placeholder="Filter"
                value={filter}
                onChange={handleFilterChange}
                className="w-full p-1 mb-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="w-full p-1 border rounded-md"
              />
              <ul>
                {filteredWebsiteContext.map((item, index) => (
                  <li key={index} className="py-1">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
