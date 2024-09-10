import React from 'react';
import Hero from './Hero';
import Sticker from './Sticker';
import Ring from './Ring';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Hero />
      <Sticker />
      <div className={styles.scroller}>
        <div className={styles.content}>
          <div className={styles.panel}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Ring className={styles.ringUnder} />
      <Ring className={styles.ringOver} />
    </header>
  );
};

export default Header;