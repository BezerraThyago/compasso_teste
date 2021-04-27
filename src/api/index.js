import axios from "axios";

const oAuthClient = {
  client_id: "939758533a0983874fba",
  client_secret: "1040da2ff03f742845817d667b128a1b55f1639d",
};

export const api = axios.create({
  baseURL: "https://api.github.com/",
});
