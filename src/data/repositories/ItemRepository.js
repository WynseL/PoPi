import { itemValue, setItemValue } from "../models/Item";

const itemsData = require("../items.json");
const typesData = require("../types.json");

class CropsRepository {
  constructor() {
    this.itemsData = itemsData.items;
    this.gameVersion = itemsData.gameVersion;
    this.dateUpdated = itemsData.dateUpdated;
    this.typesData = typesData;
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
}

export default CropsRepository;
