"use client"; // Agrega esta línea al principio del archivo

import { useEffect } from 'react';
import styles from  '../Styles/Hero.scss';
import Card from './Card';
import { initAnimations } from './animation';

const Hero = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <header>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1>Step up your CSS game,<br /><span>today</span></h1>
          <p>Start your journey and join thousands of others.</p>
          <a
            href="https://twitter.com/intent/follow?screen_name=jh3yy"
            target="_blank"
            rel="noreferrer noopener"
          >Start now</a>
        </div>
      </div>
      <div className={styles.sticker}>
        <div className={styles.content}>
          <div className={styles.panel}>
            <div className={styles.panelRow}>
              <Card />
              {/* Repeat Card component as needed */}
            </div>
          </div>
        </div>
      </div>
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
      <div className={styles.ringUnder}>
        <img src="/portal-ring.png" alt="" />
      </div>
      <div className={styles.ringOver}>
        <img src="/portal-ring.png" alt="" />
      </div>
    </header>
  );
};

export default Hero;