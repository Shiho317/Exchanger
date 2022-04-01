import React, {useContext} from 'react';
import './Home.style.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Home = () => {

  const { datas } = useContext(AppContext);

  return (
    <div className='home-wrapper'>
      <h1></h1>
      <div className='home-contents'>
        <div className='home-left'>
          <div className='usd'>
            <h2>USD</h2>
          </div>
          <div className='subtitle'>
            <p>Hello guest.<br/>If you want to know foreign exchange rates,<br/>click the button in below.</p>
            <Link to='/exchange'>
              <button>Exchange</button>
            </Link>
          </div>
        </div>
        <div className='home-right'>
          <ul>
            <li>aaa</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home