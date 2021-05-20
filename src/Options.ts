// Save the options.

import {AffiliateIDRepositoryImpl} from "./infrastructure/AfffiliateIDRepositoryImpl";
import {AffiliateID} from "./domain/affiliate/AffiliateID";

function saveOptions() {
    const repository = new AffiliateIDRepositoryImpl();
    // @ts-ignore TODO: null
    const id = document.getElementById("txt_id").value;

    if (id) {
        // Save the updated affiliate ID.
        repository.save(new AffiliateID(id));
    } else {
        // The box is blank - remove the value entirely (reset).
        repository.saveDefault();
    }

    // @ts-ignore TODO: null
    document.getElementById("message-content").textContent = "saved.";
}

function loadOptions() {
    new AffiliateIDRepositoryImpl().restore().then((id: any) => {
        // @ts-ignore TODO: null
        document.getElementById("txt_id").value = id;
        // @ts-ignore TODO: null
        document.getElementById("message-content").textContent = "";
    }).catch((e: any) => {
        console.error(e);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Save the options when the button is clicked.
    // @ts-ignore TODO: null
    document.getElementById("save").addEventListener('click', saveOptions);

    // Load the options and populate the form.
    loadOptions();
});
