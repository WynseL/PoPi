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

const ItemView = (props) => {
  const { item } = props;
  // console.log(item);
  return (
    <Box display="inline-block" maxWidth="200">
      <Card>
        <CardContent align="left">
          <Typography variant="h6" color="textPrimary">
            {item.name}
          </Typography>
          <Chip size="small" label={item.type} />
          <Chip size="small" label="Basic" />
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
          <br />
          asdasd
          <br />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemView;
