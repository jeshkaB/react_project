import {useLocation} from "react-router-dom";

import {imageBaseURL} from "../../constants";
import css from './MoviesListCard.module.css'
import {DetailsById} from "../DetailsById";

function MovieListCard(props) {
    const {state} = useLocation()

    const movie = state.data.movie
    const genres = state.data.genres

    return (
        <div>
            <div className={css.ImgBlock}>
                <img className={css.BackdropImg} src={`${imageBaseURL}${movie.backdrop_path}`}
                     alt={`poster ${movie.title}`}/>
                <div className={css.ImgBlockInfo}>
                    <div><h1>{movie.title}</h1></div>
                    <div><h2>Vote average - {movie.vote_average}</h2></div>
                    <div><h2>Release date - {movie.release_date}</h2></div>
                    <div><h2>Genres: {genres.join(', ')}</h2></div>
                    <div><DetailsById id={movie.id}/></div>
                </div>
            </div>
            <div className={css.Over}>Overview:<h2>{movie.overview}</h2></div>
        </div>
    );
}

export {MovieListCard}