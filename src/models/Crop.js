class Crop {
  constructor(item, seed) {
    if (item !== null && seed !== null) {
      this.id = item.id;
      this.name = item.name;
      this.sellPrice = item.sell_price;
      this.energy = item.energy;
      this.seed = seed;
    }
  }
}

export default Crop;
