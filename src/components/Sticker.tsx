import React from 'react';
import styles from '../styles/Sticker.module.css';

const Sticker = () => {
  return (
    <div className={styles.sticker}>
      <div className={styles.content}>
        <div className={styles.panel}>
          <div className={styles.panel__row}>
            <div className={`${styles.card} ${styles.card__one}`}>
              <div className={styles.card__column}>
                <div className={styles.card__avatar}>
                  <img
                    src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.card__content}>
                <div className={styles.card__details}>
                  <div className={styles.text}></div>
                  <div className={`${styles.image} ${styles.headspace}`}>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Headspace</title>
                      <path
                        d="M23.9711 11.8612c.279 3.8878-1.5272 6.0933-2.6155 7.6357-1.694 1.7856-3.8397 4.2203-9.291 4.3565-4.6237.1827-6.8957-1.8508-8.8034-3.617-2.487-2.7336-3.1366-4.3512-3.261-8.3752-.0118-2.467.9397-4.9292 2.6025-7.0954C4.934 1.4736 8.6408.3699 12.0646.1426c3.5923-.1392 6.4493 1.6723 8.3993 3.624 2.4963 2.632 3.2629 4.8923 3.5054 8.0946Z"
                      />
                    </svg>
                  </div>
                  <div className={styles.text}></div>
                  <div className={styles.card__dummy}>
                    <div className={styles.textWrap}>
                      <div className={styles.text}></div>
                      <div className={styles.text}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card__column}>
                <div className={`${styles.card__company} ${styles.alexa}`}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Amazon Alexa</title>
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 18.09 4.53 23.11 10.4 23.9V21.5A1.59 1.59 0 0 0 9.32 19.97A8.41 8.41 0 0 1 3.6 11.8A8.37 8.37 0 0 1 12.09 3.6A8.4 8.4 0 0 1 20.4 12.31L20.39 12.38A8.68 8.68 0 0 1 20.36 12.76C20.36 12.83 20.35 12.9 20.34 12.96C20.34 13.04 20.33 13.12 20.32 13.19L20.3 13.29C19.27 20.07 10.45 23.87 10.4 23.9C10.92 23.97 11.46 24 12 24C18.63 24 24 18.63 24 12S18.63 0 12 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other cards */}
        </div>
      </div>
    </div>
  );
};

export default Sticker;