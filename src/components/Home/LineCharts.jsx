import React from 'react';
import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'

Chart.register(CategoryScale)

const LineCharts = ({timeseriesDataKey, usdDatas}) => {

  const data = {
    labels: timeseriesDataKey,
    datasets: [
      {
        label: "USD",
        data: usdDatas,
        fill: true,
        backgroundColor: "rgba(238, 238, 238, 0.3)",
        borderColor: "rgba(238, 238, 238, 1)",
      }
    ]
  }

  return (
    <Line data={data}/>
  )
}

export default LineCharts