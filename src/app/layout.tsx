import React from 'react';
import '../styles/GlobalStyles.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;