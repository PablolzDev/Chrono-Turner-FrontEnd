import React from 'react';
import Head from 'next/head';
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
        <h1>Transforma el caos en <span>claridad</span></h1>
        <p>Una nueva era de organización personal está a punto de</p>
        <p>comenzar. ¿Estás listo para descubrirla?</p>
        <a
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          Revelar el secreto
        </a>
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