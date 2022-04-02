import React, { useContext, useEffect } from 'react';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { AppContext } from '../../App';
import './Exchange.style.css';

const Exchange = () => {

  const { 
    fetchData, 
    convert, 
    convertData, 
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

  const getConvert = (e) => {
    e.preventDefault();
    fetchData(convert)
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
      </div>
      <h1>{convertData.result} {convertData.query.to}</h1>
    </div>
  )
}

export default Exchange