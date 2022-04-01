import React from 'react';
import './Results.style.css';

const Results = () => {
  return (
    <div className='results-wrapper'>
      <div className='result-details'>
        <h1>123456JPY</h1>
        <p>(1234/usd)</p>
        <p>2020/01/01/12:00</p>
      </div>
      <div className='chart-details'>
        aaa
      </div>
      <div className='back-btn'>
        <button>Go Back</button>
      </div>
    </div>
  )
}

export default Results