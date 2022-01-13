import {urls} from "../../configs/urls";

const getPlus = ()=> {
    return fetch(urls.posts)
        .then(value => value.json())
}
const getPlusId = (id)=>{
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json())
}
export const postService ={
    getPlus,
    getPlusId
}