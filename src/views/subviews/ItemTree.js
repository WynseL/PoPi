import React from "react";
import ItemView from "./ItemView";
import { printTime } from "../../data/models/Item";

const ItemTree = (props) => {
  const { item } = props;
  return <ItemView item={item} />;
};

export default ItemTree;
