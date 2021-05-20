import { InvalidParameterException } from "../support/InvalidParameterException";
export class ItemURL {
    constructor(value) {
        if (!value.startsWith("https://"))
            throw new InvalidParameterException();
        if (!value.match("https://.+.iherb.com/pr/.+"))
            throw new InvalidParameterException();
        this.v = value;
    }
    get value() {
        return this.v;
    }
}
//# sourceMappingURL=ItemURL.js.map