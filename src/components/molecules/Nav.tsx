
"use client";
import React, { useState } from 'react';
import { Nav as StyledNav, Navbar, ContainerNav, StyledLink, NbgButton, Divider } from '@styles/styles';
import { Menu, X } from 'lucide-react';


import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav>
      <Navbar>
        <Link href="/" passHref>
          <Image
            src="/utils/Logo.png"
            alt="Descripción del logo"
            width={80}
            height={70}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <div className="hamburger hamburger-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </Navbar>

      <ContainerNav className={isOpen ? 'open' : ''}>
        <NbgButton href="/">Home</NbgButton>
        <NbgButton href="/pricing">Price</NbgButton>
        <NbgButton href="/auth">Log In</NbgButton>
        <StyledLink href="/pricing" className='start-free'>Start Your Free Trial</StyledLink>
      </ContainerNav>
    </StyledNav>
  );
};

export default Nav;
