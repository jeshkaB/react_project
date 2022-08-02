import {axiosService} from "./axios.service";
import {accessUrl, urls} from "../constants";

const genresService = {
    getAll: ()=> axiosService.get(`${urls.genres}${accessUrl}`)
}

export {genresService}