import React from 'react';
import Head from 'next/head';
import styles from '@styles/Hero.module.css';
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
          <h1>Transforma el caos en <span className="highlight">claridad</span></h1>
          <p>Una nueva era de organización personal está a punto de</p>
          <p>comenzar. ¿Estás listo para descubrirla?</p>


          <a
            href="https://twitter.com/intent/follow?screen_name=jh3yy"
            target="_blank"
            rel="noreferrer noopener"
          >
            Revelar el secreto
          </a>
        </div>
      </div>

      {/* panel home */}
      <div className={styles.scroller}>
        <div className={styles.content}>
          <div className={styles.panel}>
            
            {/* card */}
            <div></div>

          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;