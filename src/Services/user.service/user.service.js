import {axiosServicesUserPostComment} from "../axios.services/axiox.services";
import {urls} from "../../Constants/Urls/UrlsUserPostComment";

export const userService = {
    getAll: () => axiosServicesUserPostComment.get(urls.users)
        .then(value => value.data)
}