import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Text, IconLink, NavLink,  SocialIcons, Navigation, FooterContainer, FooterContent, FooterMain, Copyright } from '@styles/Footer'



// Main Component
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <Link href="/" passHref>
           
              <Image
                src= "/utils/logoName.png"
                alt="Descripción del logo"
                width={120} // Ancho deseado
                height={140} // Alto deseado
              />
        
          </Link>
          <Navigation>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">Plans</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
          </Navigation>
          <SocialIcons>
            <IconLink href="#" aria-label="Facebook">
              <Facebook size={20} />
            </IconLink>
            <IconLink href="#" aria-label="Twitter">
              <Twitter size={20} />
            </IconLink>
            <IconLink href="#" aria-label="Instagram">
              <Instagram size={20} />
            </IconLink>
          </SocialIcons>
        </FooterMain>
        <Copyright>
          <Text as="p" style={{ fontSize: '0.75rem' }}>
            ©Chrono Turner. All rights reserved.
          </Text>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}