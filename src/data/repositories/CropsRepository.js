import Crop from "../../models/Crop";
import Seed from "../../models/Seed";

const cropsData = require("../crops.json");
const seedsData = require("../seeds.json");

class CropsRepository {
  constructor() {
    this.crops = Array.from(cropsData);
    this.seeds = Array.from(seedsData);
  }

  getData() {
    let objects = [];
    this.crops.forEach((item) => {
      let seedItem = this.seeds.find((x) => x.id === item.seed_id);
      let seed = new Seed(seedItem);
      let crop = new Crop(item, seed);
      objects.push(crop);
    });

    return objects;
  }
}

export default CropsRepository;
