import { UpdateStrategy } from "./UpdateStrategy";
import { Item } from "../app/gilded-rose";

export class Backstage implements UpdateStrategy{
    updateQuality( item: Item) {
        if(item.sellIn<0){
            item.quality = 0;
            item.sellIn = item.sellIn - 1;
            return item;
        }
        if (item.quality < 50) {
            item.quality = item.quality + 1
        }
        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        item.sellIn = item.sellIn - 1;
        return item;
    }

}