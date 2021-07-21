import React from "react";
import { Typography, Chip } from "@material-ui/core";
import { rawMaterials } from "../../data/models/Item";

const ItemInformation = (props) => {
  const { item } = props;
  const materials = rawMaterials(item);

  return (
    <div align="left">
      <Typography variant="h3" color="textPrimary">
        {item.name}
      </Typography>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        Items Required
      </Typography>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1x</th>
            <th>2x</th>
            <th>3x</th>
            <th>5x</th>
            <th>10x</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((mat) => {
            return (
              <tr key={mat.item.id} align="center">
                <td>
                  <img height="30px" width="30px" src={mat.item.photo} alt="" />
                </td>
                <td>{mat.amount}</td>
                <td>{mat.amount * 2}</td>
                <td>{mat.amount * 3}</td>
                <td>{mat.amount * 5}</td>
                <td>{mat.amount * 10}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemInformation;
