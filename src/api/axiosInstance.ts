import axios from "axios";
// const PF = import.meta.env.VITE_REACT_APP_MYSQL_API_URL;
const PF = import.meta.env.VITE_REACT_APP_MONGO_API_URL;
export const myAPIClient = axios.create({
  baseURL: `${PF}`,
});