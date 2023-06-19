import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Add your logo or title here */}
        <div className="text-xl font-bold">Audio Programming</div>
      </div>
      <div className="flex items-center justify-center flex-grow">
     
      </div>
    </nav>
  );
};

export default Navbar;
