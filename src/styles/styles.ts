import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';

// Global Styles
export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  :root {
    --border: hsl(0 0% 80%);
    --card: hsl(0 0% 98%);
    --element: hsl(0 0% 90%);
    --accent: rgb(114, 114, 189);
    --panel: hsl(240 38% 98%);
    --black:  hsl(200, 19%, 18%)
  }

  html {
    color-scheme: light only;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
  }

  body::before {
    --size: 60px;
    --line: hsl(0 0% 0% / 0.15);
    content: '';
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #DFDBE5;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    mask: linear-gradient(-15deg, transparent 50%, white);
    top: 0;
    transform-style: flat;
    pointer-events: none;
    z-index: -1;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 4.5vw + 1rem, 10rem);
    width: 20ch;
    max-width: 100vw;
    font-weight: 800;
    text-wrap: balance;
    text-align: center;
  }

  h1 span {
    color: var(--accent);
  }

  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 3vw + 1rem, 8rem);
  }

  section {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  main {
    height: 100vh;
  }
`;

// NavBar Styles
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.25rem;
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 20;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
  }
`;

export const Navbar = styled.div`
  justify-content: center;
  margin: 0 auto;
  display: flex;
  width: 80ch;
  max-width: 100%;
`;

export const BearLink = styled.a`
  color: canvasText;
  width: 48px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  opacity: 0.8;

  svg {
    width: 75%;
  }

  &:hover, &:focus-visible {
    opacity: 1;
  }
`;

export const XLink = styled(BearLink)`
  /* Estilos específicos para XLink si son necesarios */
`;

// Hero Styles
export const HeroSection = styled.section`
  p {
    font-size: 1.25rem;
    max-width: 75%;
    text-align: center;
    margin: 0 auto;
  }

  a {
    color: canvas;
    background: var(--accent);
    border-radius: 5px;
    text-decoration: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: hsl(0 0% 100% / 0);
      box-shadow: 0 0 20px rgba(86, 71, 185, 0.7);
    }

    &:hover::after, &:focus-visible::after {
      background: hsl(0 0% 100% / 0.1);
    }
  }
`;

// Video Styles

export const Video = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: auto;
  display: block;

  /* Responsivo para pantallas más pequeñas */
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 4px;
  }
`;


// Content Styles
export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const TextContainer = styled.div`
  margin-top: 400px;
  text-align: center;
`;

export const Panel = styled.div`
  width: clamp(320px, 50vw, 750px);
  max-width: calc(100vw - 2rem);
  border-radius: 18px;
  border: 2px solid var(--accent);
  display: grid;
  grid-template-rows: repeat(6, 60px);
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 32px 32px rgba(23,22,24,.04),0 16px 16px rgba(23,22,24,.04),0 8px 8px rgba(23,22,24,.04);
`;

export const ScrollerPanel = styled(Panel)`
  background: var(--panel);
`;

export const PanelRow = styled.div`
  container-type: size;
  display: flex;
  justify-content: center;
`;

// Footer Styles
export const Footer = styled.footer`
  padding: 1rem;
  display: grid;
  place-items: center;
`;

//Login styles

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  img{
    width: 30%;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:  10%;
  gap: 5px;
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 34px;
  color:  var(--black);;
  text-align: center;

`;

export const Span = styled.span`
  font-size: 1.2rem;
  color: #666 ; 
  text-align: center;
  margin-bottom: 35px;
`;

export const Label = styled.label `
  color:var(--black);
  font-size: 20px;
  
`;
export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const ContainerPass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    color: var(--black);
    font-size: 20px;
  }
`

export const Button = styled.button`
  padding: 10px;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--black);
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;

export const SigInOption = styled.div`
  color: hsl(200, 19%, 18%) ;
  width: 100%;
  text-align: center;

  p{
    
  }

  a{
    color: var(--accent);
    margin: 5px;
  }


`

export const FeatureItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;


export const FeatureContent = styled.div`
  flex: 1;
`;

export const FeatureTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const FeatureDescription = styled.p`
  margin: 0;
  font-size: 1rem;
`;


// Styled components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

`;

export const MainHeading = styled.h1`
  font-size: 2.5rem;
  text-align: right;
  margin-bottom: 1rem;
  margin-left: 8rem;
  color: hsl(200, 19%, 18%);
`;


export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: -16px 11px 14px -6px rgba(200,200,235,1);
-moz-box-shadow: -16px 11px 14px -6px rgba(200,200,235,1);
box-shadow: -16px 11px 14px -6px rgba(200,200,235,1);
  padding: 1.5rem;
  width: calc(50% - 1rem);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardFeatures = styled.div`
  margin-top: 5rem;
  background: white;
   
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 12px -1px rgba(200,200,235,1);
-moz-box-shadow: 10px 10px 12px -1px rgba(200,200,235,1);
box-shadow: 10px 10px 12px -1px rgba(200,200,235,1);
  padding: 1.5rem;
  width: calc(50% - 1rem);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const TaskIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.7rem;
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const ItemDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
`;



export const FeatureIcon = styled.span`
  width: 28px;
  height: 34px;
  margin-right: 1rem;
  margin-top: 0.7rem;
  color: ${props => {
    switch (props.color) {
      case 'pink': return '#ffc0cb';
      case 'green': return '#78ce79';
      case 'red': return '#e82c2c';
      case 'gray': return '#6b7280';
      case 'blue': return '#3b82f6';
      default: return 'inherit';
    }
  }};
`;

export const CTAButton = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;
