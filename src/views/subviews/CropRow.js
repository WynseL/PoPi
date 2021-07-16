import React from "react";

class CropRow extends React.Component {
  render() {
    const { crop } = this.props;
    let seed = crop.seed;
    return (
      <tr>
        <td id="name">{crop.name}</td>
        <td>{crop.sellPrice}</td>
        <td>{crop.energy}</td>
        <td>{seed.price}</td>
        <td>{seed.harvestCount}</td>
        <td>{seed.growTimeInitial}</td>
        <td>{seed.growTimeAfterHarvest}</td>
        <td>{seed.yieldPerHarvest}</td>
        <td>{seed.totalYield()}</td>
      </tr>
    );
  }
}

export default CropRow;
