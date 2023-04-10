export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality; //never negative
  }

  updateQuality() {
    //if sellIn <0
      //degrade quality twice as fast
  }
}

export class CheeseItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    //if Aged Brie
      //increase quality
  }
}

export class LegendaryItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  //never loses quality
}



//Convert This:-------------------------------------------------

export const updateQuality = () => {
  for (let item of items) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));