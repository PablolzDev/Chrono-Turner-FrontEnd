import React from 'react';
import Head from 'next/head';
import styles from '../styles/Header.module.css';
const Header: React.FC = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/style.css" />
    </Head>
    <header className={styles.header}>
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
    </header>
  </>
);

export default Header;