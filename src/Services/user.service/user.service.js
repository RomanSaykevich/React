import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users)
        .then(value => value.data),

    getId: (id) => axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data),

    getByPostUser:(id) => axiosService.get(`${urls.users}/${id}/posts`)
        .then(value => value.data),

    getByUserAlbom:(id) => axiosService.get(`${urls.users}/${id}/albums`)
        .then(value => value.data),

    getByUserPhotos:(id)=> axiosService.get(`${urls.albums}/${id}/photos`)
        .then(value => value.data)
}