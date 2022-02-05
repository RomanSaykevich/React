import {axiosServicesUserPostComment} from "../axios.services/axiox.services";
import {urls} from "../../Constants/Urls/UrlsUserPostComment";

export const commentService = {
    getAll: () => axiosServicesUserPostComment.get(urls.comments)
        .then(value => value.data)
}