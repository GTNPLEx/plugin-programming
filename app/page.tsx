import React from 'react';
import Image from 'next/image';

import Navbar from './Navbar';
import Sidebar from './components/SideBar';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
import Header from './components/Header';
import CSP from './components/csp';
import Trainer from './components/Trainer';

const Page: React.FC = () => {
  return (
    <>
      <CSP />
      <Navbar />
      <Sidebar />
      <Header />
      <Trainer />

      {/* Add your content here */}
      <BlogContent />

      <Footer />
    </>
  );
};

export default Page;
