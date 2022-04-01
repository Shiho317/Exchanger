import React, { useState } from 'react';
import { RiArrowUpDownLine } from 'react-icons/ri';
import './Exchange.style.css';

const Exchange = () => {

  const getConvert = () => {

  }

  const [ fromUnit, setFromUnit ] = useState('USD');

  return (
    <div className='exchange-wrapper'>
      <div className='exchange-input'>
        <form>
          <div className='from'>
            <label>
              From:
            </label>
            <input type='number' required/>
            <select id='unit-from' required>
              <option></option>
            </select>
          </div>
          <button className='reverse'>
            <RiArrowUpDownLine/>
          </button>
          <div className='to'>
            <label>
              To:
            </label>
            <input type='number' required/>
            <select id='unit-to' required>
              <option></option>
            </select>
          </div>
          <button type='submit' className='submit-btn'>Calculte</button>
        </form>
      </div>
    </div>
  )
}

export default Exchange