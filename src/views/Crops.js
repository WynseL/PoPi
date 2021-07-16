import React from "react";
import CropsRepo from "../data/repositories/CropsRepository";
import CropRow from "./subviews/CropRow";

class Crops extends React.Component {
  render() {
    let repo = new CropsRepo();
    let data = repo.getData();
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th colSpan="3">Crop</th>
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
          </thead>
          <tbody>
            {data.map((crop) => (
              <CropRow key={crop.id} crop={crop} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crops;
