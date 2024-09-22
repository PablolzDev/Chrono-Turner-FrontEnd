"use client";
import React from 'react';

import type { ReactNode } from 'react';
import { DM_Sans } from 'next/font/google';
import Nav from '../components/molecules/Nav';
import { GlobalStyle } from '@styles/styles'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="es" className={dmSans.className}>
      <body>
        {/* Aplicar GlobalStyle */}
        <GlobalStyle /> 
        <div className="relative min-h-screen flex flex-col">
          
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
