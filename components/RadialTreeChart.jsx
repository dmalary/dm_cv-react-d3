/* eslint-disable react/prop-types */
import { useMemo } from "react";

import * as d3 from "d3";

const degToRad = (deg) => (deg * 2 * Math.PI) / 360;

const RadialTreeChart = ({ width, height, data, margin }) => {
  console.log('data', data)

  const dataHierarchy = useMemo(() => {
    // return d3.hierarchy(data);
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);
  console.log('dataHierarchy', dataHierarchy);

  const radius = Math.min(width, height) / 2 - margin;

  const tree = useMemo(() => {
    const treeGen = d3.cluster()
      .size([360, radius]);
    return treeGen(dataHierarchy);
  }, [dataHierarchy, radius])
  console.log('tree', tree);
  console.log('tree.descendants()', tree.descendants());

  const allNodes = tree.descendants().map((node) => {
    //   if (!node.parent) null;
    // console.log('node', node)

    const flipLabel = node.x > 180;

    return (
      <g 
        key={node.id || node.data.name}
        transform={`rotate(${node.x - 90}) translate(${node.y})`}
        >
        <circle 
          cx={0}
          cy={0}
          r={4}
          stroke="transparent"
          fill="#333333"
        />
        <text
          x={flipLabel ? -15 : 15}
          // y={0}
          fontSize={11}
          textAnchor={flipLabel ? "end" : "start"}
          transform={flipLabel ? "rotate(180)" : "rotate(0)"}
          alignmentBaseline="middle"
        >
          {node.data.name}
        </text>
      </g>
    )
  });

  const linksGen = d3.linkRadial()
    .angle((node) => degToRad(node.x))
    .radius((node) => node.y);
    console.log("tree links:", tree.links());

  const allEdges = tree.links().map((link) => {
    // For the very first level, draw lines instead of radial links that would look bad at the root
    if (link.source.depth === 0) {
      return (
        <g
          key={`${link.source.data.name}_${link.target.data.name}`}
          transform={`rotate(${link.target.x - 90})`}
        >
          <line x1={0} y1={0} x2={link.target.y} y2={0} stroke="grey" />;
        </g>
      );
    }
    return (
      <path
        key={`${link.source.data.name}_${link.target.data.name}`}
        fill="none"
        stroke="#333333"
        d={linksGen(link) || undefined}
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${radius + margin / 2}, ${radius + margin / 2})`}>
          {allEdges}
          {allNodes}
        </g>
      </svg>
    </div>
  )
}

export default RadialTreeChart;