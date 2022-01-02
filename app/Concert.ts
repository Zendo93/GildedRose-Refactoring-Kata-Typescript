import {IItem} from "@/IItem";

export class Concert implements IItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseQuality() {
    if (this.quality > 0) {
      --this.quality;
    }
  }

  decreaseSellIn() {
    --this.sellIn;
  }

  increaseQuality() {
    if (this.quality < 50) {
      ++this.quality;
    }
  }

  update() {
    this.increaseQuality();
    this.decreaseSellIn();
    if (this.sellIn < 11) {
      this.increaseQuality();
    }
    if (this.sellIn < 6) {
      this.increaseQuality();
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}
