import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Exchange from './components/Exchange/Exchange';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Results from './components/Results/Results';

export const AppContext = createContext()

function App() {

  const getData = (method, url, data) => {
    const datas = fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(results => {
      return results.json()
    })
    return datas
  };
  
  let url = 'https://api.exchangerate.host';

  const fetchData = async(option) => {
    try {
      const catchData = await getData(
        'GET',
        `${url}/${option}`
      )
      switch(option){
        case latest:
          setLatestData(catchData);
          break;
        case convert:
          setConvertData(catchData);
          break;
        case timeseries:
          setTimeseriesData(catchData);
          break;
        case fluctuation:
          setFluctuationData(catchData);
          break;
        case historical:
          setHistoricalUSD(catchData);
          break;
        case symbols:
          setSymbolsData(catchData);
          break;
        default:
          console.log(catchData);
      }
      return catchData
    } catch (error) {
      console.log(error)
    }
  }

  const [ historicalUSD, setHistoricalUSD ] = useState([]);
  const [ fluctuationData, setFluctuationData ] = useState([]);
  const [ latestData, setLatestData ] = useState([]);
  const [ convertData, setConvertData ] = useState([]);
  const [ timeseriesData, setTimeseriesData ] = useState([]);
  const [ symbolsData, setSymbolsData ] = useState([]);

  
  const newDate = new Date();
  const today = 
  `${newDate.getFullYear()}-${('000' + (newDate.getMonth() + 1)).slice(-2)}-${('000' + newDate.getDate()).slice(-2)}`;

  const minusWeek = newDate.getDate() - 7;
  newDate.setDate(minusWeek);
  const weekAgo = 
  `${newDate.getFullYear()}-${('000' + (newDate.getMonth() + 1)).slice(-2)}-${('000' + newDate.getDate()).slice(-2)}`;
  
  const minusDay = newDate.getDate() + 6;
  newDate.setDate(minusDay)
  const yesterday = 
  `${newDate.getFullYear()}-${('000' + (newDate.getMonth() + 1)).slice(-2)}-${('000' + newDate.getDate()).slice(-2)}`;
  
  const latest = 'latest';
  const convert = 'convert?from=USD&to=EUR';
  const historical = `${today}`;
  const timeseries = `timeseries?start_date=${weekAgo}&end_date=${today}`;
  const fluctuation = `fluctuation?start_date=${yesterday}&end_date=${today}`;
  const symbols = 'symbols';

  return (
    <AppContext.Provider 
    value={{fetchData, 
            historicalUSD, 
            fluctuationData, 
            latestData, 
            convertData, 
            timeseriesData, 
            symbolsData,
            latest,
            convert,
            historical,
            timeseries,
            fluctuation,
            symbols}}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
