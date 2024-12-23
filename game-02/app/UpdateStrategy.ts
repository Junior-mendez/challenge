import { Item } from "./gilded-rose";

export interface UpdateStrategy{
    updateQuality( item: Item);
}