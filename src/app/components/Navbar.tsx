"use client";
import styles from '../Styles/Navbar.scss';


const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <a
          className={styles.bearLink}
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            className={styles.w9}
            viewBox="0 0 969 955"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;