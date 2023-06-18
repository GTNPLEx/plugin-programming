import React from 'react';

const ProfileCard: React.FC = () => {
  const sendMail = () => {
    window.location.href = 'mailto:pjfabronckers@gmail.com';
  };

  return (
    <div className="flex justify-start items-start">
      <div className="bg-white rounded-md shadow-md p-4 transition duration-300 hover:shadow-lg">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src="src/image/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Patricia Bronckers</h3>
          <p className="text-gray-500">pjfabronckers@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;