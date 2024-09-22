"use client"
import React, { useState, useEffect } from 'react';
import { Nav as StyledNav, Navbar, BearLink} from '@styles/styles';
import { StyledLink, NbgButton, Divider, } from '@styles/styles';
import { Menu, X } from 'lucide-react'
import Image from 'next/image';




const Nav: React.FC = () => {
  


  return (
    <StyledNav>
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
    </StyledNav>
  );
};

export default Nav;