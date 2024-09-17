"use client"
import React, { useState, useEffect } from 'react';
import styles from '@styles/NavBar.module.css';

const Nav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = window.innerHeight; // Usa la altura de la ventana como referencia
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.navbar}>
        <a
          className={styles.bearLink}
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content without paths */}
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Nav;