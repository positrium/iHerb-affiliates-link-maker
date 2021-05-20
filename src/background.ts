import {AffiliateIDRepository} from "./domain/affiliate/AffiliateIDRepository";
import {AffiliateIDRepositoryImpl} from "./infrastructure/AfffiliateIDRepositoryImpl";
import {Logger} from "./util/Logger";


class BackgroundWorker {
    private readonly log:Logger;
    private readonly repository:AffiliateIDRepository;

    public constructor() {
        this.log = new Logger();
        this.repository = new AffiliateIDRepositoryImpl();
    }

    public initializeStorage() {
        this.repository.restore().then((affiliate:any) => {
            const affiliateId = affiliate.id;
            this.log.debug(affiliateId, "initializeStorage");

            if (affiliateId === undefined) {
                this.log.debug("affiliatesId set default", "affiliatesId is undefined. set default.2");
                this.repository.saveDefault();
            } else {
                this.log.debug(affiliateId, "result.affiliatesId3");
            }

        }).catch((e:any) => {
            console.error(e);
        });
    }
}


try{
    const worker:BackgroundWorker = new BackgroundWorker();
    worker.initializeStorage();
}catch(e:any){
    console.error(e);
}

