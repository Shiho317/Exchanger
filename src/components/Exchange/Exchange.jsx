import React, { useContext, useEffect, useState } from 'react';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { AppContext } from '../../App';
import './Exchange.style.css';

const Exchange = () => {

  const { 
    fetchData, 
    convert, 
    convertData, 
    convertDataUnit,
    symbols, 
    symbolsData, 
    convertedAmount,
    setConvertedAmount,
    setInput,
    } = useContext(AppContext);

  useEffect(() => {
    fetchData(symbols)
  },[])

  const symbolsResults = Object.values(symbolsData);

  const onChangeFrom = (e) => {
    setInput(value => ({
      ...value,
      fromUnit: e.target.value
    }))
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

  const onChangeConverted = (e) => {
    setConvertedAmount(e.target.value)
    console.log(convertedAmount)
  }

  const [ onSubmitHandler, setOnSubmitHandler ] = useState(false);

  const getConvert = (e) => {
    e.preventDefault();
    fetchData(convert);
    setOnSubmitHandler(true);
  }
  console.log(convertData)
  

  return (
    <div className='exchange-wrapper'>
      <div className='exchange-input'>
        <form onSubmit={getConvert}>
          <div className='from'>
            <label>
              From:
            </label>
            <input type='number' name='fromAmount' required onChange={onChangeFromAmount}/>
            <select id='unit-from' required onChange={onChangeFrom}>
            {symbolsResults.map(result => (
              <option key={result.code} value={result.code}>
                {result.code}
              </option>
            ))}
            </select>
          </div>
          <button className='reverse'>
            <RiArrowUpDownLine/>
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
      </div>
    </div>
  )
}

export default Exchange