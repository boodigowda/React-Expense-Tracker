import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'
import Card from '../UI/Card';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <Card className="chart">
          {props.dataPoints.map((dataPoint) => {
            return (
              <ChartBar
                key={dataPoint.lable}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
              />
            );
          })}
          {/* <ChartBar /> */}
        </Card>
      );
}

export default Chart