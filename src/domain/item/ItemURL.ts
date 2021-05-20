import {InvalidParameterException} from "../support/InvalidParameterException";

export class ItemURL {
    private readonly v: string;

    constructor(value: string) {
        if (!value.startsWith("https://")) throw new InvalidParameterException();
        if (!value.match("https://.+.iherb.com/pr/.+")) throw new InvalidParameterException();
        this.v = value;
    }

    public get value() {
        return this.v;
    }

}

