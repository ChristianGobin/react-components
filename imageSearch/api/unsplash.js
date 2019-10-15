const axios = require("axios").default;
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 1000,
  headers: {
    Authorization:
      "Client-ID 2a80ec61a4997acededfaadf11414dbd642432711c839758518df8f2ea6bb737"
  }
});

export default instance;
