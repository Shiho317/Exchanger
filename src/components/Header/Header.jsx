import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.css';
import Logo from '../../assets/image/logo.svg';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <nav>
        <div>
          <img src={Logo} alt='logo'/>
        </div>
        <ul>
          <li>
            <Link to='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/exchange'>
              EXCHANGE
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header