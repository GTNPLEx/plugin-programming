'use client'

import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';

const ProfileCard: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isCardClicked, setIsCardClicked] = useState(false);

  const sendMail = () => {
    const email = 'pjfabronckers@gmail.com';
    const subject = 'Profile Card Message';
    const body = `Message: ${message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  return (
    <div
      className={`flex justify-start items-start transition-all duration-300 ${isCardClicked ? 'shadow-2xl' : 'shadow-md'}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="bg-white rounded-md p-2 flex">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
          <Image src=".a/yeswecan.png" alt="Avatar" width={40} height={40} className="object-cover" />
        </div>
        <div>
          <h3 className="text-base font-semibold">Patricia Bronckers</h3>
          <p className="text-gray-500 text-sm">pjfabronckers@gmail.com</p>
          <div className="flex items-center mt-1">
            <input type="text" value={message} onChange={handleInputChange} className="border border-gray-300 px-2 py-1 text-xs" placeholder="Enter your message" />
            <button
              onClick={sendMail}
              className={`bg-blue-500 text-white px-2 py-1 ml-2 rounded-md transition-all duration-300 ${isCardClicked ? 'hover:bg-blue-600' : 'hover:shadow-lg'}`}
            >
              <AiOutlineMail className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
