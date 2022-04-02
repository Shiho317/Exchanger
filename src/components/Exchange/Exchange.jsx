import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { AppContext } from '../../App';
import './Exchange.style.css';
import ExchangeCharts from './ExchangeCharts';

const Exchange = () => {

  const { 
    fetchData, 
    convert, 
    convertData, 
    convertDataUnit,
    symbols, 
    symbolsData, 
    setInput,
    timeseries,
    timeseriesData,
    setBaseUnit
    } = useContext(AppContext);

  useEffect(() => {
    fetchData(symbols)
  },[])

  const timeseriesDataKey = Object.keys(timeseriesData);
  const timeseriesDataValue = Object.values(timeseriesData)
  const timeseriesDatas = timeseriesDataValue.map(data => {
    return data[convertDataUnit.to]
  })

  const symbolsResults = Object.values(symbolsData);

  const onChangeFrom = (e) => {
    setInput(value => ({
      ...value,
      fromUnit: e.target.value
    }))
    setBaseUnit(e.target.value)
  };

  const onChangeTo = (e) => {
    setInput(value => ({
      ...value,
      toUnit: e.target.value
    }))
  }

  const onChangeFromAmount = (e) => {
    setInput(value => ({
      ...value,
      fromAmount: e.target.value
    }))
  }

  const [ onSubmitHandler, setOnSubmitHandler ] = useState(false);

  const getConvert = (e) => {
    e.preventDefault();
    fetchData(convert);
    fetchData(timeseries);
    setOnSubmitHandler(true);
  }

  return (
    <div className='exchange-wrapper'>
      <div className='exchange-input'>
        <form onSubmit={getConvert}>
          <div className='from'>
            <label>
              From:
            </label>
            <input 
              type='number' 
              name='fromAmount' 
              required 
              onChange={onChangeFromAmount}/>
            <select 
              id='unit-from' 
              required 
              onChange={onChangeFrom}>
            {symbolsResults.map(result => (
              <option key={result.code} value={result.code}>
                {result.code}
              </option>
            ))}
            </select>
          </div>
          <button className='reverse'>
            <FaAngleDoubleDown/>
          </button>
          <div className='to'>
            <label>
              To:
            </label>
            <select id='unit-to' required onChange={onChangeTo}>
            {symbolsResults.map(result => (
              <option key={result.code}>
                {result.code}
              </option>
            ))}
            </select>
          </div>
          <button type='submit' className='submit-btn'>Calculte</button>
        </form>
        {onSubmitHandler && (
          <div className='results-amount'>
            <h1>{Number(convertData.result).toFixed(2)} {convertDataUnit.to}</h1>
            <p>({convertData.date})</p>
          </div>
        )}
      </div>
      <div className='exchange-chart'>
        {onSubmitHandler && (
          <ExchangeCharts 
            timeseriesDataKey={timeseriesDataKey} 
            timeseriesDatas={timeseriesDatas} 
            convertDataUnit={convertDataUnit}/>
        )}
      </div>
    </div>
  )
}

export default Exchange