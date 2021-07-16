import Crop from "../../models/Crop";
import Seed from "../../models/Seed";

const cropsData = require("../crops.json");
const seedsData = require("../seeds.json");

class CropsRepository {
  constructor() {
    this.crops = cropsData;
    this.seeds = seedsData;
  }

  getGameVersion() {
    return this.crops.game_version;
  }

  getDateUpdated() {
    return this.crops.date_updated;
  }

  getData() {
    let objects = [];
    this.crops.items.forEach((item) => {
      let seedItem = this.seeds.items.find((x) => x.id === item.seed_id);
      let seed = new Seed(seedItem);
      let crop = new Crop(item, seed);
      objects.push(crop);
    });

    return objects;
  }
}

export default CropsRepository;
