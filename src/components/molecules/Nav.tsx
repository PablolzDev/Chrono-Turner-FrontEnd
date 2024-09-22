"use client"
import React, { useState, useEffect } from 'react';
import { Nav as StyledNav, Navbar, BearLink, MobileMenu, MobileNavLink, MobileDivider } from '@styles/styles';
import { StyledLink, NbgButton, Divider, HamburgerButton, } from '@styles/styles';
import { Menu, X } from 'lucide-react'
import Image from 'next/image';




const Nav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroHeight) {
        setIsVisible(true)
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

        <Image
          src="/utils/Logo.png"
          alt="Descripción del logo"
          width={80} // Ancho deseado
          height={70} // Alto deseado
        />
        <NbgButton href="/">Home</NbgButton>
        <NbgButton href="/pricing">Price</NbgButton>
        <Divider aria-hidden="true"></Divider>
        <NbgButton href="/auth">Log In</NbgButton>
        <StyledLink href="/pricing" >Start Your Free Trial</StyledLink>


      </Navbar>
      <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </HamburgerButton>
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/pricing">Pricing</MobileNavLink>
        <MobileDivider aria-hidden="true" />
        <MobileNavLink href="/login">Log in</MobileNavLink>
        <StyledLink href="/pricing" >Start Your Free Trial</StyledLink>
      </MobileMenu>
    </StyledNav>
  );
};

export default Nav;