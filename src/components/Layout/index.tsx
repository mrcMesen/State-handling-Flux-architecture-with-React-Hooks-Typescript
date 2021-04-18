import { ReactElement, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className='app'>
      <Navbar />
      <main className='main-content'>{children}</main>
      <Footer />
    </div>
  );
};
