import {AffiliateID} from "./AffiliateID";

export interface AffiliateIDRepository {
    save(id: AffiliateID): void;

    saveDefault(): void;

    restore(): Promise<AffiliateID>;
}

