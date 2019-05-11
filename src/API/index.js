import axios from "axios";
export const domainName = "http://62.210.5.62:5001/";
export const axiosBase = axios.create({
  baseURL: `${domainName}api/`
});
