
import React, { useState } from 'react';
import { Calendar, Inbox, Menu, ChartBarStacked, LayoutDashboard } from 'lucide-react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

interface LeftContentProps {
  $isOpen: boolean;
}

interface LeftBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const LeftBar = styled.div<{ $isOpen: boolean }>`
  background-color: #f5f8ff;
  width: 215px;
  border-right: 1px solid #e3e7f7;
  position: relative;
  height: 100vh;
  overflow-y: auto;
  
  // Estática en pantallas grandes (por defecto)
  display: block;

  // En pantallas pequeñas, aplicar lógica de visibilidad
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;



const MenuButton = styled.button`
  display: none; // Oculto por defecto en pantallas grandes
  position: fixed;
  left: 10px;
  top: 40px;
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;

  // Visible en pantallas pequeñas
  @media (max-width: 768px) {
    display: block;
  }
`;


const LeftContent = styled.div<LeftContentProps>`
  padding-top: 40px;
  margin-top: 40px;
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

interface MenuItemType {
  icon: React.ReactNode;
  text: string;
}

const LeftBarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItemType[] = [
    { icon: <Inbox />, text: 'All' },
    { icon: <ChartBarStacked />, text: 'Status' },
    { icon: <Calendar />, text: 'Upcoming' },
    { icon: <LayoutDashboard />, text: 'Dash Board' },
  ];

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu />
      </MenuButton>
      <LeftBar $isOpen={isMenuOpen} className={isMenuOpen ? 'open' : ''}>
        <LeftContent $isOpen={isMenuOpen}>
    
           <Avatar sx={{ bgcolor: deepPurple[500], marginLeft: '20px'} }>P</Avatar>
          
           
          <ul>
            {menuItems.map((item, index) => (
              <MenuItem key={index}>
                {item.icon}
                {item.text}
              </MenuItem>
            ))}
          </ul>
        </LeftContent>
      </LeftBar>
    </>
  );
};

export default LeftBarComponent;
