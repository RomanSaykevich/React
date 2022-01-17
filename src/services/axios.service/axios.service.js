import axios from "axios";

import baseUrl from "../../configs/Url/Url";

export const axiosServ = axios.create({
    baseURL: baseUrl
});