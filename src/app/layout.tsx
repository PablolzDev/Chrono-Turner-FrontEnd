import React from 'react';
import '../styles/globals.css';
import type { ReactNode } from 'react';
import Nav from '../components/Nav';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen flex flex-col">
          <Nav />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;