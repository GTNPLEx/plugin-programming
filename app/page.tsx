import React from 'react';
import Navbar from '../app/components/NavBar/NavBar';
import Sidebar from '../app/components/SideBar/SideBar';
import Footer from '../app/components/Footer/Footer';
import Header from '../app/components/Header/Header';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      {/* Add your content here */}
      <Footer />
    </>
  );
};

export default Page;
