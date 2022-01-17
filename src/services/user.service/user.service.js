import {axiosServ} from "../axios.service/axios.service";
import {urls} from "../../configs/Url/Url";

export const userServ = {
    getAll: () => axiosServ.get(urls.users)
        .then(value => value.data)
}