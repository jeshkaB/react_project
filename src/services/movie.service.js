import {axiosService} from "./axios.service";
import {accessUrl, urls} from "../constants";

const movieService = {
    getMovieById: (id)=> axiosService.get(`${urls.movie}/${id}${accessUrl}&append_to_response=videos`),

}
export {movieService}