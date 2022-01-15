import {axiosService} from "../axios.service/axiose.service";
import {urls} from "../../configs/urls";


export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)

}