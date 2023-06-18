import React from 'react';
import image from 'next/image'

import Navbar from 'app/components/NavBar/Navbar';
import Sidebar from 'app/components/SideBar/SideBar';
import BlogContent from 'app/components/BlogContent.tsx/BlogContent';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header/Header';


const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      

      
      {/* Add your content here */}
      <BlogContent />
      
      <Footer />
    </>
  );
};

export default Page;
