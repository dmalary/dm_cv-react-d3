/* eslint-disable react/prop-types */
import { useMemo } from "react";

import * as d3 from "d3";

const degToRad = (deg) => (deg * 2 * Math.PI) / 360;

const RadialTreeChart = ({ width, height, data, margin }) => {
  // console.log('data', data)

  const dataHierarchy = useMemo(() => {
    // return d3.hierarchy(data);
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);
  // console.log('dataHierarchy', dataHierarchy);

  const radius = Math.min(width, height) / 2 - margin;

  const tree = useMemo(() => {
    const treeGen = d3.cluster()
      .size([360, radius]);
    return treeGen(dataHierarchy);
  }, [dataHierarchy, radius])
  // console.log('tree', tree);
  // console.log('tree.descendants()', tree.descendants());

  const allNodes = tree.descendants().map((node) => {
      if (!node.parent) null;
    // console.log('node', node)

    const flipLabel = node.x >= 180;

    return (
      <g 
        key={node.id || node.data.name}
        transform={`rotate(${node.x - 90}) translate(${node.y}, 0)`}
        strokeLinejoin="round"
        strokeWidth="3"
        >
        <circle 
          cx={0}
          cy={0}
          r={4 - (node.data.value || 0)}
          stroke={"transparent"}
          fill={
            node.depth === 0 ? "#EDC951" 
              : node.depth === 1 ? "#CC333F" 
                : node.depth === 2 ? "#00A0B0" : "#4dad44"
          } 
        />
        <text
          transform={flipLabel ? "rotate(180)" : "rotate(0)"}
          dy="0.12em"
          x={flipLabel ? -10 : 10}
          // x={node.x < Math.PI === !node.children ? 10 : -10}
          textAnchor={flipLabel ? "end" : "start"}
          fontSize={11}
          alignmentBaseline="middle"
          paintOrder="stroke"
          stroke="#efefef"
          fill="currentColor"
        >
          {node.data.name}
        </text>
      </g>
    )
  });

  const linksGen = d3.linkRadial()
    .angle((node) => degToRad(node.x))
    .radius((node) => node.y);
    // console.log("tree links:", tree.links());

  const allEdges = tree.links().map((link) => {
    return (
      <path
        key={`${link.source.data.name}_${link.target.data.name}`}
        fill="none"
        stroke="#333333"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        d={linksGen(link) || undefined}
      />
    );
  });

  return (
    <svg width={width + width / 2} height={height + height / 2}>
      {/* <g transform={`translate(${radius + margin / 2}, ${radius + margin / 2})`}> */}
      <g transform={`translate(${(width + width / 2) / 2}, ${(height + height / 2) / 2})`}>
        {allEdges}
        {allNodes}
      </g>
    </svg>
  )
}

export default RadialTreeChart;