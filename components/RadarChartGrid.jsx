/* eslint-disable react/prop-types */
import * as d3 from "d3";

const polarToCartesian = (angle, distance) => {
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);
  return { x, y };
};

const RadarChartGrid = ({ innerRadius, outerRadius, xScale, axisData }) => {
  // console.log('innerRadius', innerRadius)
  // console.log('outerRadius', outerRadius)
  // console.log('axisData', axisData)
  // console.log('keys', keys)

  const circlesDomain = [...Array(5).keys()];
  // console.log('circlesDomain', circlesDomain)

  // const circleColorScale = d3.scaleSequential(d3.interpolatePuRd)
  //   .domain(circlesDomain.reverse());

  const lineGen = d3.lineRadial();

  const allAxes = axisData.map((el, i) => {
    const angle = xScale(el.key);

    if (angle === undefined) null;

    const path = lineGen([
      [angle, innerRadius],
      [angle, outerRadius]
    ]);
    // console.log('path', path)

    const labelPos = polarToCartesian(
      angle - Math.PI / 2, 
      outerRadius + 12
    );
    // console.log('labelPos', labelPos)

    return (
      <g key={i}>
        <path d={path} stroke={"#cccccc"} strokeWidth={.4} r={1}/>
        <text
          x={labelPos.x}
          y={labelPos.y}
          fontSize={11}
          fill={"#333333"}
          textAnchor={labelPos.x > 0 ? 'start' : 'end'}
          dominantBaseline={"middle"}
        >
          {el.key}
        </text>
      </g>
    )
  });

  const allCircles = circlesDomain.map((pos, i) => {
    // console.log('i', i)
    // console.log('pos', pos)
    return (
      <circle
        key={i}
        cx={0}
        cy={0}
        r={innerRadius + (pos * (outerRadius - innerRadius)) / (5 - 1)}
        stroke={"#a3a3a3"}
        // fill={circleColorScale(pos)}
        fill={"none"}
      />
  )});

  return (
    <g>
      {allAxes}
      {allCircles}
    </g>
  )
}

export default RadarChartGrid;