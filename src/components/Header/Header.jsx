import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.style.css';
import Logo from '../../assets/image/logo.svg';
import { AppContext } from '../../App';

const Header = () => {
  
  const { setBaseUnit } = useContext(AppContext);

  return (
    <div className='header-wrapper'>
      <nav>
        <div>
          <img src={Logo} alt='logo'/>
        </div>
        <ul>
          <li>
            <Link to='/' onClick={() => {setBaseUnit('CAD')}}>
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