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
    --this.items[item].quality;
  }

  increaseQuality(item) {
    ++this.items[item].quality;
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
        if (this.items[i].quality > 0) {
          this.decreaseQuality(i);
        }
      } else {
        if (this.items[i].quality < 50) {
          this.increaseQuality(i);
          if (this.isConcert(i)) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(i);
              }
            }
          }
        }
      }

      if (!this.isWeapon(i)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        if (!this.isFood(i)) {
          if (!this.isConcert(i)) {
            if (this.items[i].quality > 0) {
              if (!this.isWeapon(i)) {
                this.decreaseQuality(i);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQuality(i);
          }
        }
      }
    }

    return this.items;
  }
}
