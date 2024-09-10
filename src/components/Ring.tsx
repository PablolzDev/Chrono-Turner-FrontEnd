import React from 'react';
import styles from '../styles/Ring.module.css';

interface RingProps {
  className: string;
}

const Ring = ({ className }: RingProps) => {
  return (
    <div className={`${styles.ring} ${className}`}>
      <img src="https://assets.codepen.io/605876/portal-ring.png" alt="Ring" />
    </div>
  );
};

export default Ring;