import {useLocation} from "react-router-dom";

import {imageBaseURL} from "../../constants";
import css from './MoviesListCard.module.css'


function MovieListCard(props) {
    const {state} = useLocation()
    const movie = state.data.movie
    const genres = state.data.genres

    return (
        <div>
            <div>
                <img className={css.BackdropImg} src={`${imageBaseURL}${movie.backdrop_path}`}
                     alt={`poster ${movie.title}`}/>
                {/*<img src={`${imageBaseURL}${movie.poster_path}`} alt={`poster ${movie.title}`}/>*/}

                <div><h1>{movie.title}</h1></div>
                <div>Release date: <h2>{movie.release_date}</h2></div>
                <div><h2>{genres.join(', ')}</h2></div>
            </div>
            <div>Overview:<h2>{movie.overview}</h2></div>


        </div>
    );
}

export {MovieListCard}