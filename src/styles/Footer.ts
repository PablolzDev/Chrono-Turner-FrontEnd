
import Link from 'next/link'
import styled from 'styled-components'

// Atoms
export const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  color: hsl(200, 19%, 18%);
`

export const IconLink = styled.a`
  color: hsl(200, 19%, 18%);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(114, 114, 189);
  }
`

export const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: hsl(200, 19%, 18%);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(114, 114, 189);
  }
`

// Molecules
export const Logo = styled(Text)`
  font-size: 1.125rem;
  font-weight: 600;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

// Organisms
export const FooterContainer = styled.footer`
  width: 70%;
  height: 100px;
 
  border-top: 1px solid hsl(0, 0%, 80%);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`

export const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

export const FooterMain = styled.div`
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

export const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
`