import React from 'react';
import styles from '@/styles/Card.module.css';

interface CardProps {
    emoji?: string;
    title: string;
    description: string;
}


const Card: React.FC<CardProps> = ({ title, description, emoji }) => (
    <div className={styles.card}>
        <h3 className={styles.card__title}>{emoji} {title}</h3>
        <p className={styles.card__description}>{description}</p>
    </div>
);

export default Card