import React, { createContext, useEffect, useState } from 'react';
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
  

  // const fetchData = async() => {
  //   try {
  //     const catchData = await getData(
  //       'GET',
  //       'https://api.exchangerate.host/latest'
  //     )
  //     console.log(catchData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // })


  const [ datas, setDatas ] = useState([]);

  const [ fromUnit, setFromUnit ] = useState('USD');


  return (
    <AppContext.Provider value={datas}>
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
