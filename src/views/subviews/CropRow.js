import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const CropRow = (props) => {
  const { crop } = props;
  let seed = crop.seed;
  return (
    <TableRow>
      <TableCell id="name">{crop.name}</TableCell>
      <TableCell align="center">{crop.sellPrice}</TableCell>
      <TableCell align="center">{crop.energy}</TableCell>
      <TableCell align="center">{seed.price}</TableCell>
      <TableCell align="center">{seed.harvestCount}</TableCell>
      <TableCell align="center">{seed.growTimeInitial}</TableCell>
      <TableCell align="center">{seed.growTimeAfterHarvest}</TableCell>
      <TableCell align="center">{seed.yieldPerHarvest}</TableCell>
      <TableCell align="center">{seed.totalYield()}</TableCell>
    </TableRow>
  );
};

export default CropRow;
