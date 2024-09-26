import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { HeroSection, Content, PanelContainer } from '@styles/styles'; // Asegúrate de importar correctamente
import Video from '@components/molecules/Video';
import AppDescription from '../UI/AppDescription';
import WhyChooseUs from '../molecules/why-choose-us-component';

const Header: React.FC = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head>
    <HeroSection>
      <Content>
        <h1>Turning chaos into  <span>clarity</span></h1>
        <p>A new era of personal organisation is about to begin...</p><p>Are you ready to discover it?</p>
        <Link href="/pricing">Reveal the secret</Link>
      </Content>
    </HeroSection>
    <PanelContainer>
      <Video />
      <AppDescription />
    </PanelContainer>
    <PanelContainer>
      <WhyChooseUs />   
    </PanelContainer>
  </>
);

export default Header;