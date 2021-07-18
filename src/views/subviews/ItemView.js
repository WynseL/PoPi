import {
  Box,
  makeStyles,
  Card,
  Typography,
  CardContent,
  Chip
} from "@material-ui/core";
import React from "react";
import { printTime } from "../../data/models/Item";

const cardStyle = {
  display: "block",
  width: "30vw",
  height: "30vw"
};

const ItemView = (props) => {
  const { item, amount } = props;
  // console.log(item);
  return (
    <Box display="inline-block" maxWidth="200">
      <Card style={cardStyle}>
        <CardContent align="left">
          <Typography variant="h6" color="textPrimary">
            {item.amount} {item.name}
          </Typography>
          <Chip size="small" label={item.type} />
          {item.subtype !== undefined ? (
            <Chip size="small" label={item.subtype} />
          ) : null}
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {item.description !== undefined
              ? item.description
              : "no description"}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            Buy Value: {item.buyValue}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            Sell Value: {item.sellValue}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemView;
