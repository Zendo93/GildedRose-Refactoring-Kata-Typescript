import {Item} from "@/Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  decreaseQuality(item) {
    if (this.items[item].quality > 0) {
      --this.items[item].quality;
    }
  }

  decreaseSellIn(item) {
    --this.items[item].sellIn;
  }

  increaseQuality(item) {
    if (this.items[item].quality < 50) {
      ++this.items[item].quality;
    }
  }

  isFood(item): boolean {
    return this.items[item].name == 'Aged Brie';
  }

  isConcert(item) {
    return this.items[item].name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  isWeapon(item) {
    return this.items[item].name == 'Sulfuras, Hand of Ragnaros';
  }

  updateSellIn(index: number) {
    if (!this.isWeapon(index)) {
      this.decreaseSellIn(index);
    }
  }

  updateQuality(index: number) {
    if (!this.isFood(index) && !this.isConcert(index) && !this.isWeapon(index)) {
      this.decreaseQuality(index);
    }

    if (this.isFood(index) || this.isConcert(index) || this.isWeapon(index)) {
      this.increaseQuality(index);
    }

    if (this.isConcert(index) && this.items[index].sellIn < 11) {
      this.increaseQuality(index);
    }

    if (this.isConcert(index) && this.items[index].sellIn < 6) {
      this.increaseQuality(index);
    }

    if (this.items[index].sellIn < 0 && !this.isFood(index) && !this.isConcert(index) && !this.isWeapon(index)) {
      this.decreaseQuality(index);
    }

    if (this.items[index].sellIn < 0 && !this.isFood(index) && this.isConcert(index) || this.isWeapon(index)) {
      this.items[index].quality = 0;
    }

    if (this.items[index].sellIn < 0 && this.isFood(index)) {
      this.increaseQuality(index);
    }
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateQuality(i);
      this.updateSellIn(i);
    }

    return this.items;
  }
}
