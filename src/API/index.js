import axios from "axios";
export const domainName = "http://89.163.230.143/";
export const axiosBase = axios.create({
  baseURL: `${domainName}api/`
});