import axios from "axios";
const { JsonWebTokenError } = require("jsonwebtoken");

// GET States and occupations list
export async function getFormDetails() {
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form");
    console.log(response.data);
}

// POST all form data to endpoint
export async function postFormDetails() {
    const response = await axios.post("https://frontend-take-home.fetchrewards.com/form");
    console.log(response.data);
}