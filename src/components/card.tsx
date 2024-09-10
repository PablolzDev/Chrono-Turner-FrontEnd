import React from 'react';
import styles from '../styles/Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__column}>
        <div className={styles.card__avatar}>
          <img src="avatar.png" alt="Avatar" />
        </div>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__details}>
          <div className={styles.card__dummy}>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;