import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Not Aged Brie, Backstage passes to a TAFKAL80ETC concert,' +
    'Sulfuras, Hand of Ragnaros should decrease quality by one', () => {
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
});
