import React, {useContext, useEffect} from 'react';
import './Home.style.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Home = () => {

  // const { 
  //   fetchData, 
  //   historicalUSD, 
  //   fluctuationData, 
  //   historical, 
  //   fluctuation 
  // } = useContext(AppContext);

  // useEffect(() => {
  //   fetchData(historical);
  //   fetchData(fluctuation);
  // },[])

  // console.log(historicalUSD)
  // console.log(fluctuationData.rates)
  
  let title = ['aa'];

  return (
    <div className='home-wrapper'>
      <h1>{historicalUSD.date}</h1>
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
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home