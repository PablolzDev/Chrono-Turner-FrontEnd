import React from 'react';
import './home/styles/globals.css';
import type { ReactNode } from 'react';
import Header from './home/components/Hero';

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