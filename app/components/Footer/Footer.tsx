'use client'

import React from 'react';
import ProfileCard from 'app/components/ProfileCard/ProfileCard';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4 px-8 mt-8">
      <div className="flex justify-between">
        <div className="w-1/4">
          <ProfileCard />
        </div>
        <div className="w-3/4 flex justify-end items-end space-x-4">
          <a href="/disclaimer">Disclaimer</a>
          <a href="/sitemap">Sitemap</a>
          <a href="/content">Content</a>
        </div>
      </div>
      <div className="text-sm mt-4">
        Qcs Developers &bull; Contact: pjfabronckers@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
