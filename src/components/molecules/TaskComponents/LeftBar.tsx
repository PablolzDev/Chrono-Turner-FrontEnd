import React, { useState } from 'react';
import { Calendar, Star, Hash, Users, Trash, Inbox, Home, Sun, Zap, Menu } from 'lucide-react';
import styled from 'styled-components';

interface LeftContentProps {
  isOpen: boolean;
}

const LeftBar = styled.div`
  background-color: #f5f8ff;
  width: 215px;
  border-right: 1px solid #e3e7f7;
  position: relative;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateX(0);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  position: fixed;
  left: 10px;
  top: 40px;
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LeftContent = styled.div<LeftContentProps>`
  padding-top: 40px;
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
    { icon: <Inbox />, text: 'Inbox' },
    { icon: <Star />, text: 'Today' },
    { icon: <Calendar />, text: 'Upcoming' },
    { icon: <Hash />, text: 'Important' },
    { icon: <Users />, text: 'Meetings' },
    { icon: <Trash />, text: 'Trash' },
    { icon: <Home />, text: 'Family' },
    { icon: <Sun />, text: 'Vacation' },
    { icon: <Zap />, text: 'Festival' },
  ];

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu />
      </MenuButton>
      <LeftBar className={isMenuOpen ? 'open' : ''}>
        <LeftContent isOpen={isMenuOpen}>
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