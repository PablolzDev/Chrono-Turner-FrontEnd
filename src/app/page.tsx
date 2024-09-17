import React from 'react';

import styles from '@/styles/Hero.module.css';
import Header from '@/components/Hero';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <Nav></Nav>
        <div className={styles.hero}></div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Home;