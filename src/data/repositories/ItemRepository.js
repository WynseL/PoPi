import { itemValue, setItemValue } from "../models/Item";

const itemsData = require("../items.json");
const typesData = require("../types.json");

class CropsRepository {
  constructor() {
    this.itemsData = itemsData.items;
    this.gameVersion = itemsData.gameVersion;
    this.dateUpdated = itemsData.dateUpdated;
    this.typesData = typesData;

    this.recursionCounter = 0;
  }

  getCropsData() {
    let objects = [];
    let typeId = "0001";
    let crops = this.itemsData.filter((item) => item.type === typeId);
    crops.forEach((item) => {
      let value = setItemValue(item);
      let seedItem = this.itemsData.find(
        (item) => item.id === value.recipe[0].seed_id
      );
      let newValue = { ...value, recipe: [setItemValue(seedItem)] };
      objects.push(newValue);
    });

    return objects;
  }

  getTreeData(item) {
    this.recursionCounter++;
    // console.log("-----------------");
    console.log("COUNTER: " + this.recursionCounter);
    // console.log(item);
    // console.log("-----------------");
    let objects = [];
    if (Object.keys(item).length === 0) {
      return objects;
    }
    console.log("1");
    const type = item.type;
    const subType = item.subType;

    console.log("2");
    item.recipe.forEach((recipe) => {
      var addItem;
      switch (type) {
        case "0001":
          let seedId = this.itemsData.find(
            (item) => item.id === recipe.seed_id
          );
          var checkItem = setItemValue(seedId);
          addItem = checkItem;
          break;
        default:
          let itemId = this.itemsData.find(
            (item) => item.id === recipe.item_id
          );
          checkItem = setItemValue(itemId);
          if (checkItem.recipe.length !== 0) {
            checkItem = this.getTreeData(checkItem);
          }
          addItem = { item: checkItem, amount: recipe.amount };
      }
      console.log("2.5");
      console.log(addItem);
      // FIX SOMETHING HERE!!!
      objects.push(addItem);
    });

    console.log("3");
    let newItem = { ...item, recipe: objects };
    console.log("4");
    return newItem;
  }
}

export default CropsRepository;
