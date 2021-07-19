import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import { printTime } from "../../data/models/Item";

const containerStyle = {
  display: "block",
  minWidth: "200px",
  margin: "8px"
};

const chipSyle = {
  marginRight: "8px"
};

const subtitleStyle = {
  marginTop: "8px"
};

const ItemView = (props) => {
  const { item } = props;
  // console.log(item);
  return (
    <Box display="inline-block" minWidth="200px" style={containerStyle}>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        {item.name}
      </Typography>
      <Chip size="small" label={item.type} style={chipSyle} />
      {item.subtype !== undefined ? (
        <Chip size="small" label={item.subtype} />
      ) : null}
      <Typography
        variant="subtitle2"
        color="textSecondary"
        style={subtitleStyle}
        gutterBottom
      >
        {item.description !== undefined ? item.description : "no description"}
      </Typography>
      <Typography variant="body2" color="textPrimary">
        Buy Value: {item.buyValue}
      </Typography>
      <Typography variant="body2" color="textPrimary">
        Sell Value: {item.sellValue}
      </Typography>
    </Box>
  );
};

export default ItemView;
