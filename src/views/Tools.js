import React from "react";
import ToolsRow from "./subviews/ToolsRow";

class Tools extends React.Component {
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th colSpan="3">Item</th>
            <th colSpan="6">Seed</th>
          </tr>
          <tr>
            <th rowSpan="2">Name</th>
            <th rowSpan="2">Price</th>
            <th rowSpan="2">Energy</th>
            <th rowSpan="2">Price</th>
            <th rowSpan="2">Harvest</th>
            <th colSpan="2">Growth Time</th>
            <th colSpan="2">Yield</th>
          </tr>
          <tr>
            <th>Initial</th>
            <th>Cycle</th>
            <th>Harvest</th>
            <th>Total</th>
          </tr>
          {/* {toolsData.map((crop) => (
            <ToolsRow crop={crop} />
          ))} */}
        </table>
      </div>
    );
  }
}

export default Tools;
