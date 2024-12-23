import { UpdateStrategy } from "./UpdateStrategy";
import { Item } from "../app/gilded-rose";

export class AgedBrie implements UpdateStrategy{
    updateQuality( item: Item) {
        if(item.quality>=50){
            item.sellIn =  item.sellIn - 1;
            return item;
        }
        if (item.quality < 49 && item.sellIn<0) {
            item.sellIn = item.sellIn - 1;
            item.quality = item.quality + 2;
            return item
        }
        item.quality = item.quality + 1;
        item.sellIn = item.sellIn - 1;
        return item;
    }

}