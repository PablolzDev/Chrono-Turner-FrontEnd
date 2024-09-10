import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Step up your CSS game,<br /><span>today</span></h1>
        <p>Start your journey and join thousands of others.</p>
        <a
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          Start now
        </a>
      </div>
    </div>
  );
};

export default Hero;