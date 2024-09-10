"use client";
import styles from '../Styles/Card.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardColumn}>
        <div className={styles.cardAvatar}>
          <img src="/avatar1.jpg" alt="" />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardDetails}>
          <div className={styles.text}></div>
          <div className={styles.image}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
          </div>
          <div className={styles.text}></div>
          <div className={styles.cardDummy}>
            <div className={styles.textWrap}>
              <div className={styles.text}></div>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardColumn}>
        <div className={styles.cardCompany}>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;