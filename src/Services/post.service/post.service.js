import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),

    getId: (id) => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data),

    getByPostComment: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
        .then(value => value.data)
}