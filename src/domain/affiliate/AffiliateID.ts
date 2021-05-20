export class AffiliateID {
    constructor(id: string) {
        this._id = id;
    }

    private _id: string;

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }
}

