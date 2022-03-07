import axios from "axios";

const url = "http://localhost:3333";

const auth = {
  async autheticate(data) {
    const endPonint = `${url}/login`;
    return axios.post(endPonint, data);
  },

  setLoggedUser(data) {
    let parseData = JSON.stringify(data);
    localStorage.setItem("user", parseData);
  },

  getLoggedUser() {
    let data = localStorage.getItem("user");
    if (!data) return null;
    try {
      let parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default auth;