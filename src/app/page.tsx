import React from 'react';
import Nav from './home/components/Nav';
import Header from './home/components/Header';
import MainContent from './home/components/Maincontent'
import Footer from './home/components/Footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;