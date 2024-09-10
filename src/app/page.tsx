import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import MainContent from '../components/Maincontent'
import Footer from '../components/Footer';

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