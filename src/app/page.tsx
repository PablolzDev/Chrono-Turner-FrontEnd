'use client';

import React from 'react';
import { Content } from '@styles/styles';
import Header from '@/components/organisms/Hero';
import Nav from '@/components/molecules/Nav';
import Footer from '@/components/molecules/Footer';
import Main from '@/components/molecules/Main';

const Home = () => {
  return (
    <Content>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Content>
  );
};

export default Home;