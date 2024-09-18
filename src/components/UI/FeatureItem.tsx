import React from 'react'
import styles from'@styles/FeatureSection.module.css'

type ItemProps = {
    icon: string,
    title: string,
    description:string
}

const FeatureItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );

export default FeatureItem