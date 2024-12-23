import { GildedRose } from "../app/gilded-rose";
import { Item } from "../app/gilded-rose";
import {expect} from 'chai';


describe("Test Gilded Roose", ()=>{
    it("Should update quality", ()=>{
    
        const item = new Item("Aged Brie",10,50);
        const items = [item];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).to.equal(50)
        expect(gildedRose.items[0].sellIn).to.equal(9)
    });
    it("Should update quality Conjured", ()=>{
    
        const item = new Item("Conjured",0,1);
        const items = [item];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).to.equal(1)
        expect(gildedRose.items[0].sellIn).to.equal(-1)
    });
    it("Should update quality Backstage", ()=>{
    
        const item = new Item("Backstage passes to a TAFKAL80ETC concert",10,50);
        const items = [item];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).to.equal(50)
        expect(gildedRose.items[0].sellIn).to.equal(9)
    });
    it("Should update quality Sulfuras", ()=>{
    
        const item = new Item("Sulfuras, Hand of Ragnaros",30,80);
        const items = [item];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).to.equal(80)
        expect(gildedRose.items[0].sellIn).to.equal(30)
    });
    it("Should update quality Normal", ()=>{
    
        const item = new Item("Normal",10,50);
        const items = [item];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality()
        expect(gildedRose.items[0].quality).to.equal(49)
        expect(gildedRose.items[0].sellIn).to.equal(9)
    });
});