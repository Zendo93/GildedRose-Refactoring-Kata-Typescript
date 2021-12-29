export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.isFood(i) && !this.isConcert(i) && !this.isWeapon(i)) {
        this.decreaseQuality(i);
      }

      if (this.isFood(i) || this.isConcert(i) || this.isWeapon(i)) {
        this.increaseQuality(i);
      }

      if (this.isConcert(i) && this.items[i].sellIn < 11) {
        this.increaseQuality(i);
      }

      if (this.isConcert(i) && this.items[i].sellIn < 6) {
        this.increaseQuality(i);
      }

      if (!this.isWeapon(i)) {
        this.decreaseSellIn(i);
      }

      if (this.items[i].sellIn < 0 && !this.isFood(i) && !this.isConcert(i) && !this.isWeapon(i)) {
        this.decreaseQuality(i);
      }

      if (this.items[i].sellIn < 0 && !this.isFood(i) && this.isConcert(i) || this.isWeapon(i)) {
        this.items[i].quality = 0;
      }

      if (this.items[i].sellIn < 0 && this.isFood(i)) {
        this.increaseQuality(i);
      }
    }

    return this.items;
  }
}
