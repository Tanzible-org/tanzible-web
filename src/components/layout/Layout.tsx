import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  isHome?: boolean;
}

export const Layout = ({ children, isHome = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isHome={isHome} />
      <main className="flex-1">{children}</main>
      <Footer isHome={isHome} />
    </div>
  );
};