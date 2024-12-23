import { UpdateStrategy } from "./UpdateStrategy";
import { Item } from "../app/gilded-rose";

export class Conjured implements UpdateStrategy{
    updateQuality( item: Item) {
        if(item.sellIn<0 && item.quality>=4){
            item.quality = item.quality-4;
            item.sellIn = item.sellIn - 1;
            return item;
        }
        if(item.quality>=2){
            item.quality = item.quality-2;
            item.sellIn = item.sellIn - 1;
            return item;
        }
        item.sellIn = item.sellIn-1;
        return item;
    }

}