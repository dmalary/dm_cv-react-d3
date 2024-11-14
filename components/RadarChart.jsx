/* eslint-disable react/prop-types */
import * as d3 from "d3";

const RadarChart = ({ width, height, data }) => {
  console.log('data', data);
  
  return (
    <div>
      <svg
        width={width}
        height={height}
      >

      </svg>
    </div>
  )
};

export default RadarChart;