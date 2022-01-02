import {IItem} from "@/IItem";

export class GildedRose {
  items: Array<IItem>;

  constructor(items = [] as Array<IItem>) {
    this.items = items;
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }

    return this.items;
  }
}
