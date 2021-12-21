import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Not Aged Brie, Backstage passes to a TAFKAL80ETC concert,' +
    'Sulfuras, Hand of Ragnaros should decrease quality by one if greater than zero', () => {
    const gildedRose = new GildedRose(
      [
              new Item("+5 Dexterity Vest", 10, 20),
              new Item("Elixir of the Mongoose", 5, 7)
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Item("+5 Dexterity Vest", 10, 19),
        new Item("Elixir of the Mongoose", 5, 6)
      ]
    );
    const items = gildedRose.updateQuality();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Not Aged Brie, Backstage passes to a TAFKAL80ETC concert,' +
    'Sulfuras, Hand of Ragnaros should quality stay if less than zero', () => {
    const gildedRose = new GildedRose(
      [
        new Item("+5 Dexterity Vest", 10, 0),
        new Item("Elixir of the Mongoose", 5, 0)
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Item("+5 Dexterity Vest", 10, 0),
        new Item("Elixir of the Mongoose", 5, 0)
      ]
    );
    const items = gildedRose.updateQuality();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Aged Brie quality less then fifty increase by one', () => {
    const gildedRose = new GildedRose(
      [
        new Item("Aged Brie", 10, 20),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Item("Aged Brie", 10, 21),
      ]
    );
    const items = gildedRose.updateQuality();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Not isWeapon decrease sellIn by one', () => {
    const gildedRose = new GildedRose(
      [
        new Item("Aged Brie", 10, 0),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Item("Aged Brie", 9, 0),
      ]
    );
    const items = gildedRose.updateQuality();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].sellIn).toBe(expectedItems[i].sellIn);
    }
  });
});
