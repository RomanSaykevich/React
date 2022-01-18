import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),

    getId: () => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data)
}