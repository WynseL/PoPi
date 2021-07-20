import React, { useState } from "react";

import ItemsRepo from "../data/repositories/ItemRepository";
import { setItemValue } from "../data/models/Item";
import ItemTree from "../views/subviews/ItemTree";
import ItemInformation from "../views/subviews/ItemInformation";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const Home = (props) => {
  const { height, width } = props;
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState({});

  let itemsRepo = new ItemsRepo();

  const defaultProps = {
    options: itemsRepo.itemsData,
    getOptionLabel: (option) => option.name
  };

  const setItemListener = (event, value) => {
    if (value !== null) {
      const item = setItemValue(value);
      let normalized = itemsRepo.getTreeData(item);
      setItem(normalized);
    }
  };

  const setInputValueListener = (event, value) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <Autocomplete
        {...defaultProps}
        value={item}
        onChange={setItemListener}
        inputValue={inputValue}
        onInputChange={setInputValueListener}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search item..."
            margin="normal"
            variant="standard"
          />
        )}
      />
      {Object.keys(item).length !== 0 ? (
        <div>
          <ItemTree height={height} item={item} />
          <br />
          <ItemInformation item={item} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
