import React, { useState } from "react";
import ItemView from "./ItemView";
import Tree from "react-d3-tree";
import { Tooltip, Zoom } from "@material-ui/core";

const ItemTree = (props) => {
  const { height, item } = props;
  const foreignObjectProps = {
    x: -150, //-150
    y: 45 //-100
  };

  const renderNode = ({ nodeDatum, toggleNode, foreignObjectProps }) => {
    const photoSize = 50;
    const counterCoordinates = { x: -28, y: -24 };
    const counterStyle = { font: "bold", fill: "black" };

    const amount = nodeDatum.attributes.amount;
    return (
      <g>
        <Tooltip
          title={<ItemView item={nodeDatum.attributes} />}
          arrow
          TransitionComponent={Zoom}
        >
          <g strokeWidth={0}>
            <circle r={38} fill="#000" />
            <circle r={37} fill="#e6e6e6" />
            <image
              href={nodeDatum.attributes.photo}
              width={photoSize}
              height={photoSize}
              x={photoSize / -2}
              y={photoSize / -2}
            />
            {amount !== undefined ? (
              <g>
                <circle
                  r={13}
                  cx={counterCoordinates.x}
                  cy={counterCoordinates.y}
                  fill="#000"
                />
                <circle
                  r={12}
                  cx={counterCoordinates.x}
                  cy={counterCoordinates.y}
                  fill="#e6e6e6"
                />
                <text x="-36" y="-20" style={counterStyle}>
                  {nodeDatum.attributes.amount}
                </text>
              </g>
            ) : null}
          </g>
        </Tooltip>
      </g>
    );
  };

  return (
    <div
      style={{
        height: height / 1.5,
        border: "1px solid #ccc",
        borderRadius: "5px"
      }}
    >
      <Tree
        data={item}
        pathFunc="elbow"
        orientation="horizontal"
        renderCustomNodeElement={(rd3tProps) =>
          renderNode({ ...rd3tProps, foreignObjectProps })
        }
      />
    </div>
  );
};

export default ItemTree;
