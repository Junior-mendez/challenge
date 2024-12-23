import { AgedBrie } from "./AgedBrie";
import { Backstage } from "./Backstage";
import { Conjured } from "./Conjured";
import { Default } from "./Default";
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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const type = this.items[i].name;
            switch(type) { 
                case "Aged Brie": { 
                    const age = new AgedBrie();
                    this.items[i] = age.updateQuality(this.items[i]);
                    break; 
                } 
                case "Backstage passes to a TAFKAL80ETC concert": { 
                    const backstage = new Backstage();
                    this.items[i] = backstage.updateQuality(this.items[i]);
                    break; 
                }
                case "Sulfuras, Hand of Ragnaros": { 
                    break; 
                } 
                case "Conjured": { 
                    const conjured = new Conjured();
                    this.items[i] = conjured.updateQuality(this.items[i]);
                    break; 
                }
                default:{
                    const normal = new Default();
                    this.items[i] = normal.updateQuality(this.items[i]);
                    break; 
                    
                }
            } 
        }

        return this.items;
    }
}
