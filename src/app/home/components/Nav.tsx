// components/NavBar.tsx
import React from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar: React.FC = () => (
  <nav className={styles.nav}>
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

export default NavBar;