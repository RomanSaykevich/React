import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users)
        .then(value => value.data),

    getId: () => axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data)
}