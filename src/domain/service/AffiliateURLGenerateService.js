export class AffiliateURLGenerateService {
    constructor(item, affiliateId) {
        if (item.itemURL.value.includes("?")) {
            this.affiliateURL = item.itemURL.value + "&rcode=" + affiliateId.id;
        }
        else {
            this.affiliateURL = item.itemURL.value + "?rcode=" + affiliateId.id;
        }
    }
    generateURL() {
        return this.affiliateURL;
    }
}
//# sourceMappingURL=AffiliateURLGenerateService.js.map