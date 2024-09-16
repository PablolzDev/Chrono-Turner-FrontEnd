import React from 'react';
import Nav from './home/components/Nav';
import Header from './home/components/Hero';
import MainContent from './home/components/Main'
import Footer from './home/components/Footer';
import styles from './home/styles/Hero.module.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <Nav></Nav>
        <div className={styles.hero}></div>
      </div>
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;