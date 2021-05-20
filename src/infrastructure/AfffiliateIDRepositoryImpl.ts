import {AffiliateIDRepository} from "../domain/affiliate/AffiliateIDRepository";
import {AffiliateID} from "../domain/affiliate/AffiliateID";
import {Logger} from "../util/Logger";

export class AffiliateIDRepositoryImpl implements AffiliateIDRepository {
    private readonly key: string;
    private readonly defaultAffiliateId: AffiliateID;
    private readonly log: Logger;

    public constructor() {
        this.key = "affiliatesId";
        this.defaultAffiliateId = new AffiliateID("TOK3230");
        this.log = new Logger();
    }

    restore(): Promise<AffiliateID> {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            chrome.storage.local.get(this.key, pair => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }

                if (pair === undefined) {
                    resolve(this.defaultAffiliateId);
                }

                resolve(new AffiliateID(pair[this.key]));
            })
        });
    }

    save(affiliateID: AffiliateID): void {
        let pair = {};
        // @ts-ignore
        pair[this.key] = affiliateID.id;

        chrome.storage.local.set(pair, () => {
            this.log.debug(pair, "AffiliateIDRepositoryImpl::save() result");
        });
    }

    saveDefault() {
        let pair = {};
        this.save(this.defaultAffiliateId);
    }
}
