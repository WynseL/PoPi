import React, { useState } from "react";
import CropsRepo from "../data/repositories/ItemRepository";
import {
  makeStyles,
  Card,
  CardContent,
  TextField,
  MenuItem
} from "@material-ui/core";

const Orders = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        display: "flex"
      }
    }
  }));
  const classes = useStyles();

  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [returnValue, setReturnValue] = useState(0.0);

  const setItemListener = (event) => {
    setItemName(event.target.value);
  };

  const setItemAmountListener = (event) => {
    setAmount(event.target.value);
  };

  const setItemReturnValueListener = (event) => {
    setReturnValue(event.target.value);
  };

  let repo = new CropsRepo();
  let data = repo.getData();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <TextField
          select
          value={itemName}
          onChange={setItemListener}
          label="Item"
        >
          {data.map((currentItem) => (
            <MenuItem key={currentItem.id} value={currentItem.id}>
              {currentItem.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Amount"
          value={amount}
          onChange={setItemAmountListener}
        />
        <TextField
          label="Return"
          value={returnValue}
          onChange={setItemReturnValueListener}
        />
      </CardContent>
    </Card>
  );
};

export default Orders;
