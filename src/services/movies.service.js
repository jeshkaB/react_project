import {axiosService} from "./axios.service";
import {accessUrl, urls} from "../constants";

const moviesService = {
    getAll: (page=1)=> axiosService.get(`${urls.movies}${accessUrl}`,{params:{page}}),

}
export {moviesService}