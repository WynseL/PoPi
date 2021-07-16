class Seed {
  constructor(item) {
    this.price = item.price;
    this.harvestCount = item.harvest_count;
    this.growTimeInitial = this.printTime(item.grow_time_initial);
    this.growTimeAfterHarvest = this.printTime(item.grow_time_after_harvest);
    this.yieldPerHarvest = item.yield_per_harvest;
  }

  printTime(time) {
    time = Number(time);
    var hr = Math.floor(time / 3600);
    var min = Math.floor((time % 3600) / 60);
    var sec = Math.floor((time % 3600) % 60);

    var hrDisplay = hr > 0 ? hr + "h" : "";
    var minDisplay = min > 0 ? min + "m" : "";
    var secDisplay = sec > 0 ? sec + "s" : "";
    return hrDisplay + minDisplay + secDisplay;
  }

  totalYield() {
    return this.harvestCount * this.yieldPerHarvest;
  }
}

export default Seed;
