import React, { useState } from "react";

import ItemsRepo from "../data/repositories/ItemRepository";
import { setItemValue } from "../data/models/Item";
import ItemTree from "../views/subviews/ItemTree";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState({});

  let itemsRepo = new ItemsRepo();

  const defaultProps = {
    options: itemsRepo.itemsData,
    getOptionLabel: (option) => option.name
  };

  const setItemListener = (event, value) => {
    if (value !== null) {
      setItem(setItemValue(value));
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
        <ItemTree item={itemsRepo.getTreeData(item)} />
      ) : null}
    </div>
  );
};

export default Home;
