import {axiosService} from "../axios.service/axiose.service";
import {urls} from "../../configs/urls";

export const postService = {

    getPostId: (id) => axiosService.get(`${urls.posts}?getUserId=${id}`)
        .then(value => value.data)
}
