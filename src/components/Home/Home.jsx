import React, { useContext, useEffect } from 'react';
import './Home.style.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import LineCharts from './LineCharts';

const Home = () => {

  const { 
    fetchData, 
    timeseriesData, 
    fluctuationData, 
    timeseries,
    fluctuation,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData(timeseries);
    fetchData(fluctuation);
  },[])

  const timeseriesDataKey = Object.keys(timeseriesData);
  const timeseriesDataValue = Object.values(timeseriesData)
  const usdDatas = timeseriesDataValue.map(usdData => {
    return usdData['USD']
  })
  
  const keys = Object.keys(fluctuationData)
  const ratesData = Object.values(fluctuationData);
  
  const getDate = new Date();
  const titleDate = 
  `${getDate.getFullYear()}/${('000'+(getDate.getMonth() + 1)).slice(-2)}/${('000'+getDate.getDate()).slice(-2)}/${('000'+getDate.getHours()).slice(-2)}:${('000'+getDate.getMinutes()).slice(-2)}`

  return (
    <div className='home-wrapper'>
      <h5>({titleDate})</h5>
      <div className='home-contents'>
        <div className='home-left'>
          <div className='usd'>
            <LineCharts 
              timeseriesDataKey={timeseriesDataKey} 
              usdDatas={usdDatas}/>
          </div>
          <div className='subtitle'>
            <p>Hello guest.<br/>
            If you want to know foreign exchange rates,<br/>
            click the button in below.</p>
            <Link to='/exchange'>
              <button>Exchange</button>
            </Link>
          </div>
        </div>
        <div className='home-right'>
          <ul>
          {ratesData.map((rate, index) => (
            <li key={index}>
              <p className='unit-code'>{keys[index]} / USD</p>
              <p className='current-rate'>{(rate.end_rate).toFixed(2)}</p>
              <p className={rate.change > 0 ? 'current-change' : 'current-change red'}>
                {(rate.change).toFixed(2)}({(rate.change_pct).toFixed(2)}%)
              </p>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home