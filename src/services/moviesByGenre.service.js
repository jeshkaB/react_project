import {axiosService} from "./axios.service";
import {accessUrl, urls} from "../constants";

const moviesByGenreService = {
    getAll: (id)=> axiosService.get(`${urls.movies}${accessUrl}&language=en-US&sort_by=popularity.desc&with_genres=${id}`)
}
export {moviesByGenreService}