"use client"
import React, { useState, useEffect } from 'react';
import { Nav as StyledNav, Navbar, BearLink } from '@styles/styles';

const Nav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <StyledNav className={isVisible ? 'visible' : 'hidden'}>
      <Navbar>
        <BearLink
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content without paths */}
          </svg>
        </BearLink>
      </Navbar>
    </StyledNav>
  );
};

export default Nav;