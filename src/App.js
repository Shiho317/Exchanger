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

export const AppContext = createContext()

function App() {

  const [ fluctuationData, setFluctuationData ] = useState([]);
  const [ convertData, setConvertData ] = useState([]);
  const [ convertDataUnit, setConvertDataUnit ] = useState('');
  const [ timeseriesData, setTimeseriesData ] = useState([]);
  const [ symbolsData, setSymbolsData ] = useState([]);

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
        case convert:
          setConvertData(catchData);
          setConvertDataUnit(catchData.query);
          break;
        case timeseries:
          setTimeseriesData(catchData.rates);
          break;
        case fluctuation:
          setFluctuationData(catchData.rates);
          break;
        case symbols:
          setSymbolsData(catchData.symbols);
          break;
        default:
          console.log(catchData);
      }
      return catchData
    } catch (error) {
      console.log(error)
    }
  }

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

  const [input, setInput] = useState({
    fromAmount: 0,
    fromUnit: 'AED',
    toUnit: 'AED'
  })

  const [ baseUnit, setBaseUnit ] = useState('CAD')
  
  const convert = `convert?from=${input.fromUnit}&to=${input.toUnit}&amount=${input.fromAmount}`;
  const timeseries = `timeseries?start_date=${weekAgo}&end_date=${today}&base=${baseUnit}`;
  const fluctuation = `fluctuation?start_date=${yesterday}&end_date=${today}&base=USD`;
  const symbols = 'symbols';


  return (
    <AppContext.Provider 
    value={{fetchData,
            setInput,
            setBaseUnit, 
            fluctuationData, 
            convertData,
            convertDataUnit, 
            timeseriesData, 
            symbolsData,
            convert,
            timeseries,
            fluctuation,
            symbols}}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
