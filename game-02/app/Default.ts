import { UpdateStrategy } from "./UpdateStrategy";
import { Item } from "../app/gilded-rose";

export class Default implements UpdateStrategy{
    updateQuality( item: Item) {
        if(item.sellIn<0 && item.quality>=2){
            item.quality = item.quality-2;
            item.sellIn = item.sellIn - 1;
            return item;
        }
        if(item.quality>=1){
            item.quality = item.quality-1;
            item.sellIn = item.sellIn - 1;
            return item;
        }
        item.sellIn = item.sellIn-1;
        return item;
    }

}