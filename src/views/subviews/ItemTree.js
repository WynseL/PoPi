import React, { useState } from "react";
import ItemView from "./ItemView";
import Tree from "react-d3-tree";

const ItemTree = (props) => {
  const { item } = props;
  const nodeSize = { x: 300, y: 220 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -150,
    y: -90
  };

  const renderNode = ({ nodeDatum, toggleNode, foreignObjectProps }) => {
    return (
      <g>
        <foreignObject {...foreignObjectProps}>
          <ItemView item={nodeDatum.attributes} />
        </foreignObject>
      </g>
    );
  };

  console.log(item);

  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree
        data={item}
        nodeSize={nodeSize}
        pathFunc="step"
        orientation="horizontal"
        renderCustomNodeElement={(rd3tProps) =>
          renderNode({ ...rd3tProps, foreignObjectProps })
        }
      />
    </div>
  );
};

export default ItemTree;
