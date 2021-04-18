import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';

export const Navbar = (): ReactElement => {
  return (
    <header>
      <nav className='layout-navbar bg-gradiant'>
        <Link to='/'>
          <HomeIcon /> Home
        </Link>
      </nav>
      <div className='layout-navbar-articleref'>
        <p>
          Este repositorio hace referencia a el siguiente {'   '}
          <a href='https://marcomesen.com/blog/aprende-graphql-de-0-a-basico-con-reactjs-apolloclient-and-typescript-tutorial'>
            articulo
          </a>
        </p>
      </div>
    </header>
  );
};
