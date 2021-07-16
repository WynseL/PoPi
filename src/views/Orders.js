import React from "react";
import CropsRepo from "../data/repositories/CropsRepository";
import { Card, CardContent, TextField, MenuItem } from "@material-ui/core";

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      itemId: "",
      itemName: "",
      amount: 0,
      return: 0
    };
  }

  setItem = (event) => {
    let newValue = event.target.value;
    this.setState({ itemId: newValue.id, itemName: newValue.name });
  };

  render() {
    let repo = new CropsRepo();
    let data = repo.getData();
    return (
      <Card variant="outlined">
        <CardContent>
          <TextField
            select
            value={this.state.itemName}
            onChange={this.setItem}
            label="Item"
          >
            {data.map((item) => (
              <MenuItem key={item.id} value={item}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Amount" />
          <TextField label="Return" />
        </CardContent>
      </Card>
    );
  }
}

export default Orders;
