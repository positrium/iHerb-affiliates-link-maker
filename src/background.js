import { AffiliateIDRepositoryImpl } from "./infrastructure/AfffiliateIDRepositoryImpl";
import { Logger } from "./util/Logger";
class BackgroundWorker {
    constructor() {
        this.log = new Logger();
        this.repository = new AffiliateIDRepositoryImpl();
    }
    initializeStorage() {
        this.repository.restore().then((affiliate) => {
            const affiliateId = affiliate.id;
            this.log.debug(affiliateId, "initializeStorage");
            if (affiliateId === undefined) {
                this.log.debug("affiliatesId set default", "affiliatesId is undefined. set default.2");
                this.repository.saveDefault();
            }
            else {
                this.log.debug(affiliateId, "result.affiliatesId3");
            }
        }).catch((e) => {
            console.error(e);
        });
    }
}
try {
    const worker = new BackgroundWorker();
    worker.initializeStorage();
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=background.js.map