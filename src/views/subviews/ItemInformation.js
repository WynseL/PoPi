import React from "react";
import { Typography, Chip } from "@material-ui/core";

const ItemInformation = (props) => {
  const { item } = props;

  return (
    <div align="left">
      <Typography variant="h3" color="textPrimary" gutterBottom>
        {item.name}
      </Typography>
      <Chip size="small" label={item.type} />
      {item.subtype !== undefined ? (
        <Chip size="small" label={item.subtype} />
      ) : null}
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {item.description !== undefined ? item.description : "no description"}
      </Typography>
      <Typography variant="body2" color="textPrimary">
        Buy Value: {item.buyValue}
      </Typography>
      <Typography variant="body2" color="textPrimary">
        Sell Value: {item.sellValue}
      </Typography>
    </div>
  );
};

export default ItemInformation;
