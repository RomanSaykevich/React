import axios from "axios";


import baseURL from "../../Constants/Urls/Urls";
import UserPostCommentsUrls from "../../Constants/Urls/UrlsUserPostComment";

export const axiosServices = axios.create({baseURL: baseURL});

export const axiosServicesUserPostComment = axios.create({baseURL: UserPostCommentsUrls})