/* eslint-disable react/prop-types */
import * as d3 from 'd3'

import { useMemo, useEffect, useRef } from 'react'

const TimeLineChart = ({ width, height, data, margin }) => {
  // console.log('data', data)

  const axesRefs = useRef(null);
  
  const parsedData = useMemo(() => {
    const parseDate = d3.timeParse('%m/%Y'); // 'MM/YYYY'

    return data.map((d) => ({
      ...d,
      date_completed: parseDate(d.date_completed),
    }));
  }, [data]);
  // console.log('parsedData', parsedData)

  const xScale = useMemo(() => {
    // const dates = parsedData.map((d) => d.date_completed);
    // console.log('dates', dates);

    return (
    d3.scaleTime()
      // .domain(d3.extent(dates))
      .domain([d3.timeParse('%m/%Y')('6/2009'), d3.timeParse('%m/%Y')('12/2022')])
      .range([margin, width - margin])
  )}, [width, margin])

  const colorScale = useMemo(() => {
    return d3.scaleOrdinal()
      .domain(parsedData.map(el => el.type))
      .range(["#fb8072", "#80b1d3"])
  }, [parsedData])
  
  useEffect(() => {
    const svgEl = d3.select(axesRefs.current);
    svgEl.selectAll('*').remove();

    const xAxisGen = d3.axisBottom(xScale).tickSize(10).tickSizeOuter(0);

    svgEl
      .append('g')
      .attr('class', 'x-axis')
      .attr('color', '#3a3a3a')
      .attr('transform', `translate(0, ${height - margin})`)
      .call(xAxisGen);

  }, [axesRefs, height, xScale, margin])

  const labels = parsedData.map((d, i) => (
    <g key={i} transform={`translate(${xScale(d.date_completed)}, ${height - margin - 10})`}>
      {/* <circle r={4} fill="#3a3a3a" /> */}
      <circle r={4} fill={colorScale(d.type)} />
      <text
        textAnchor="middle"
        y={-10}
        fontSize="12px"
        fill="#3a3a3a"
      >
        {d.name}
      </text>
    </g>
  ));

  return (
    <svg width={width} height={height}>
      <g
        className={'axis-group'}
        ref={axesRefs}
        transform={`translate(0, 0)`}
        />
      {labels}
    </svg>
  )
}
export default TimeLineChart;