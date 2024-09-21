import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, instagram } from 'lucide-react'
import styled from 'styled-components'

// Atoms
const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  color: hsl(200, 19%, 18%);
`

const IconLink = styled.a`
  color: hsl(200, 19%, 18%);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(114, 114, 189);
  }
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: hsl(200, 19%, 18%);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(114, 114, 189);
  }
`

// Molecules
const Logo = styled(Text)`
  font-size: 1.125rem;
  font-weight: 600;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

// Organisms
const FooterContainer = styled.footer`
  width: 100%;
  background-color: hsl(0, 0%, 98%);
  border-top: 1px solid hsl(0, 0%, 80%);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`

const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
`

// Main Component
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <Link href="/" passHref>
            <Logo as="a">YourLogo</Logo>
          </Link>
          <Navigation>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
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
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </Text>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}