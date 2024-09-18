'use client'
import React from 'react';

import styles from '@/styles/Hero.module.css';
import Header from '@/components/organisms/Hero';
import Nav from '@/components/molecules/Nav';
import Footer from '@/components/molecules/Footer';
import Main from '@/components/molecules/Main';
import FormContainer from '@/components/organisms/FormContainer';

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