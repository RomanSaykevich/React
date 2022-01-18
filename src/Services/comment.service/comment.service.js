import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Configs/urls";

export const commentService = {
    getAll: () => axiosService.get(urls.comments)
        .then(value => value.data),

    getId: () => axiosService.get(`${urls.comments}/${id}`)
        .then(value => value.data)
}