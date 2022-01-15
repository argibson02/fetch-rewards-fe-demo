const axios = require("axios");
const { JsonWebTokenError } = require("jsonwebtoken");

// GET States and occupations list
async function getStateAndOccupation() {
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form");
    return response.data;
}

// POST all form data to endpoint
async function postFormDetails(args) {
    console.log(args);
    // console.log("hi3");
    const response = await axios.post("https://frontend-take-home.fetchrewards.com/form", {
            "name": "args.name",
            "email": "email@email.com",
            "password": "args.password",
            "occupation": "Water Softener",
            "state": "Utah"
        });
    // console.log(response.status);
    // console.log("hi4");
    console.log(response.status);
    // console.log(response);
    return response;
}

module.exports = { getStateAndOccupation, postFormDetails };



// variables: {
//     name: args.name,
//     email: args.email,
//     password: args.password,
//     occupation: args.occupation,
//     state: args.state
// }
