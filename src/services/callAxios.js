import Axios from "axios";

export default function callAxios(url, method, data) {
    const baseurl = "http://localhost:3001/";
    const URL = baseurl + url;
    if (method == "POST") {
      return Axios.post(URL, data);
    } else if (method == "GET") {
      return Axios.get(URL);
    } else if (method == "DELETE") {
      return Axios.delete(URL);
    } else {
      return Axios.put(URL, data);
    }
  }