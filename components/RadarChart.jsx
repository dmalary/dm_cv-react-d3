/* eslint-disable react/prop-types */
import * as d3 from "d3";

import RadarChartGrid from "../components/RadarChartGrid";

const RadarChart = ({ width, height, data, margin }) => {
  // console.log('data', data);
  const innerRadius = 30;
  const outerRadius = Math.min(width, height) / 2 - margin;

  const allKeys = data.map(el => el.key);
  // console.log('allKeys', allKeys);

  const xScale = d3.scaleBand()
    .domain(allKeys)
    .range([0, 2 * Math.PI]);

  let yScale = d3.scaleRadial()
      .domain([0, 10])
      .range([innerRadius, outerRadius]);
  
  return (
    <svg
      width={width}
      height={height}
    >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <RadarChartGrid 
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          xScale={xScale}
          axisData={data}
        />
      </g>
    </svg>
  )
};

export default RadarChart;