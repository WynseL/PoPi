import { itemValue, setItemValue, convertToTree } from "../models/Item";

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
        (item) => item.id === value.recipe[0].item_id
      );
      let newValue = { ...value, recipe: [setItemValue(seedItem)] };
      objects.push(newValue);
    });

    return objects;
  }

  normalizeData(item) {
    let objects = [];
    if (Object.keys(item).length === 0) {
      return objects;
    }

    // set recipes
    item.recipe.forEach((recipe) => {
      var addItem;
      switch (item.type) {
        case "0001":
          let seedId = this.itemsData.find(
            (item) => item.id === recipe.seed_id
          );
          var checkItem = setItemValue(seedId);
          addItem = { item: checkItem, amount: 1 };
          break;
        default:
          let itemId = this.itemsData.find(
            (item) => item.id === recipe.item_id
          );
          checkItem = setItemValue(itemId);
          if (checkItem.recipe.length !== 0) {
            checkItem = this.normalizeData(checkItem);
          }
          addItem = { item: checkItem, amount: recipe.amount };
      }

      objects.push(addItem);
    });
    item.recipe = objects;

    // set type/subtype
    item.type = this.typesData.find((type) => type.id === item.type).type;
    item.subtype =
      item.subtype !== undefined
        ? this.typesData.find((type) => type.id === item.subtype).type
        : undefined;

    // set equipment
    item.info.equipment = this.itemsData.find(
      (curItem) => curItem.id === item.info.equipment
    );

    return item;
  }

  getTreeData(item) {
    let normalizedData = this.normalizeData(item);
    console.log(normalizedData);
    return convertToTree(normalizedData);
  }
}

export default CropsRepository;
