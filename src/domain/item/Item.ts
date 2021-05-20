import {ItemURL} from "./ItemURL";

export class Item {
    constructor(itemURL: ItemURL) {
        this._itemURL = itemURL;
    }

    private _itemURL: ItemURL;

    public get itemURL() {
        return this._itemURL;
    }

    public set itemURL(itemURL: ItemURL) {
        this._itemURL = itemURL;
    }
}

