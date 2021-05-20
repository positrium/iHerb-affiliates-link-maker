import {AffiliateID} from "./domain/affiliate/AffiliateID";
import {AffiliateIDRepository} from "./domain/affiliate/AffiliateIDRepository";
import {AffiliateIDRepositoryImpl} from "./infrastructure/AfffiliateIDRepositoryImpl";

async function getCurrentTabUrl() {
    const result = await chrome.tabs.query({"active": true, "windowId": chrome.windows.WINDOW_ID_CURRENT});

    // @ts-ignore
    // todo: validate array values simply.
    return result[0].url;
}

/**
 * returns affiliates url with user affiliates id.
 *
 * @returns {string}
 */
async function getAffiliatesUrl() {
    let affiliateId: AffiliateID;
    let affiliatesUrl = "[invalid tab url]";
    const repository: AffiliateIDRepository = new AffiliateIDRepositoryImpl();

    repository.restore().then((aid: AffiliateID) => {
        affiliateId = aid;
    }).catch((e: any) => {
        console.log(e);
    });


    await getCurrentTabUrl().then((currentTabUrl) => {
        if (currentTabUrl === undefined) {
            return;
        }

        if (!currentTabUrl.match("https\:\/\/.+\.iherb\.com\/.+")) {
            return;
        }

        if (currentTabUrl.includes("?")) {
            affiliatesUrl = currentTabUrl + "&rcode=" + affiliateId.id;
        } else {
            affiliatesUrl = currentTabUrl + "?rcode=" + affiliateId.id;
        }
    });

    return affiliatesUrl;
}

async function saveToClipBoard(str: string) {
    try {
        return await navigator.clipboard.writeText(str);
    } catch (e:any) {
        console.log(e);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    getAffiliatesUrl().then((affiliatesUrl: string) => {
        console.group("DOMContentLoaded");
        console.log(affiliatesUrl);
        console.groupEnd();

        return saveToClipBoard(affiliatesUrl)
    });
});
