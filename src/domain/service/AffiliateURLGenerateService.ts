import {AffiliateID} from "../affiliate/AffiliateID";
import {Item} from "../item/Item";

export class AffiliateURLGenerateService {
    private readonly affiliateURL: string;

    constructor(item: Item, affiliateId: AffiliateID) {
        if (item.itemURL.value.includes("?")) {
            this.affiliateURL = item.itemURL.value + "&rcode=" + affiliateId.id;
        } else {
            this.affiliateURL = item.itemURL.value + "?rcode=" + affiliateId.id;
        }
    }

    public generateURL() {
        return this.affiliateURL;
    }
}

