/* eslint-disable react/prop-types */
import * as d3 from 'd3'

const TimeLineChart = ({ width, height, data, margin }) => {
  console.log('data', data)


  const xAxis = data.map((el, i) => {

    return (
      <g></g>
    )
  })

  const labels = data.map((el, i) => {

    return (
      <g></g>
    )
  })
  return (
    <svg width={width} height={height}>
      {xAxis}
      {labels}
    </svg>
  )
}
export default TimeLineChart;