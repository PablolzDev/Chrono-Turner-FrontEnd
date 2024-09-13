import React from 'react';
import Nav from './home/components/Nav';
import Header from './home/components/Hero';
import MainContent from './home/components/Main'
import Footer from './home/components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;