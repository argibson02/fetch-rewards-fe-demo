const axios = require("axios");
const { JsonWebTokenError } = require("jsonwebtoken");

// GET States and occupations list
async function getStateAndOccupation() {
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form");

    return response.data;
}

// POST all form data to endpoint
async function postFormDetails(submissionBody) {
    let jsonBody = JSON.parse(submissionBody.formData);

    const response = await axios.post("https://frontend-take-home.fetchrewards.com/form", jsonBody);
    console.log(response.status);
    // console.log(response);
    return response;
}

module.exports = { getStateAndOccupation, postFormDetails };