import { GildedRose } from '@/gilded-rose';
import {Other} from "@/Other";
import {Food} from "@/Food";
import {Concert} from "@/Concert";

describe('Gilded Rose', () => {
  it('Not Aged Brie, Backstage passes to a TAFKAL80ETC concert,' +
    'Sulfuras, Hand of Ragnaros should decrease quality by one if greater than zero', () => {
    const gildedRose = new GildedRose(
      [
              new Other("+5 Dexterity Vest", 10, 20),
              new Other("Elixir of the Mongoose", 5, 7)
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Other("+5 Dexterity Vest", 10, 19),
        new Other("Elixir of the Mongoose", 5, 6)
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Not Aged Brie, Backstage passes to a TAFKAL80ETC concert,' +
    'Sulfuras, Hand of Ragnaros should quality stay if less than zero', () => {
    const gildedRose = new GildedRose(
      [
        new Other("+5 Dexterity Vest", 10, 0),
        new Other("Elixir of the Mongoose", 5, 0)
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Other("+5 Dexterity Vest", 10, 0),
        new Other("Elixir of the Mongoose", 5, 0)
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Aged Brie quality less then fifty increase by one', () => {
    const gildedRose = new GildedRose(
      [
        new Food("Aged Brie", 10, 20),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Food("Aged Brie", 10, 21),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Not isWeapon decrease sellIn by one', () => {
    const gildedRose = new GildedRose(
      [
        new Food("Aged Brie", 10, 0),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Food("Aged Brie", 9, 0),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].sellIn).toBe(expectedItems[i].sellIn);
    }
  });

  it('isConcert increase quality by two when sellIn less then eleven and quality less than fifty', () => {
    const gildedRose = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", 10, 0),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", 10, 2),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('isConcert increase quality by three when sellIn less then six and quality less than fifty', () => {
    const gildedRose = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", 5, 3),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('Not isFood, isConcert, isWeapon decrease quality by one when sellIn less then zero ' +
    'and quality greater than zero', () => {
    const gildedRose = new GildedRose(
      [
        new Other("+5 Dexterity Vest", -1, 1),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Other("+5 Dexterity Vest", -1, 0),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('isConcert, Not isFood decrease quality to zero when sellIn less then zero', () => {
    const gildedRose = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", -1, 5),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Concert("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });

  it('isFood increase quality by two when sellIn less then zero ' +
    'and quality less than fifty', () => {
    const gildedRose = new GildedRose(
      [
        new Food("Aged Brie", -1, 0),
      ]
    );
    const gildedRoseExpected = new GildedRose(
      [
        new Food("Aged Brie", -1, 2),
      ]
    );
    const items = gildedRose.update();
    const expectedItems = gildedRoseExpected.items;
    for (let i=0; i < items.length; i++) {
      expect(items[i].quality).toBe(expectedItems[i].quality);
    }
  });
});
