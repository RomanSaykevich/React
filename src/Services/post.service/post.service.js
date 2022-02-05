import {axiosServicesUserPostComment} from "../axios.services/axiox.services";
import {urls} from "../../Constants/Urls/UrlsUserPostComment";

export const postService = {
    getAll: () => axiosServicesUserPostComment.get(urls.posts)
        .then(value => value.data)
}