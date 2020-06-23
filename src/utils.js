import axios from "axios";
import { productRoot } from "./constants";

export const authAxios = axios.create({
  headers: {
    Authorization: `Token ${localStorage.getItem("token")}`
  }
});
