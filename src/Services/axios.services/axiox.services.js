import axios from "axios";

import baseURL from "../../Constants/Urls/Urls";

export const axiosServices = axios.create({baseURL});