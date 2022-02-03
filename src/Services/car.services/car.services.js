import {axiosServices} from "../axios.services/axiox.services";
import {urls} from "../../Constants";

export const carServices = {
    getAll:()=> axiosServices.get(urls.cars).then(value => value.data),
    deleteById:(id)=> axiosServices.delete(`${urls.cars}/${id}`),
    updateById:(id,car) => axiosServices.patch(`${urls.cars}/${id}`,car).then(value => value.data)
}
