import axios from "axios";

const Api = axios.create({
  baseURL: "https://constsys.herokuapp.com/",
});

export default Api;