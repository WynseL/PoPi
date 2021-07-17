import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { printTime } from "../../data/models/Item";

const CropRow = (props) => {
  const { crop } = props;
  let seed = crop.recipe[0];
  let info = seed.info;
  let totalYield = info.harvest_count * info.yield_per_harvest;
  return (
    <TableRow>
      <TableCell id="name">{crop.name}</TableCell>
      <TableCell align="center">{crop.sellValue}</TableCell>
      <TableCell align="center">{crop.info.energy}</TableCell>
      <TableCell align="center">{seed.buyValue}</TableCell>
      <TableCell align="center">{info.harvest_count}</TableCell>
      <TableCell align="center">{printTime(info.grow_time_initial)}</TableCell>
      <TableCell align="center">
        {printTime(info.grow_time_after_harvest)}
      </TableCell>
      <TableCell align="center">{info.yield_per_harvest}</TableCell>
      <TableCell align="center">{totalYield}</TableCell>
    </TableRow>
  );
};

export default CropRow;
