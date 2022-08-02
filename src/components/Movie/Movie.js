// import css from './Movie.module.css'
import {useNavigate} from 'react-router-dom'

import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {GenreForMovie} from "../GenreForMovie";

function Movie({movie}) {
    let genres = [];
    for (const element of movie.genre_ids) {
        switch (element) {
            case 28:
                genres.push("Action");
                break
            case 12:
                genres.push("Adventure");
                break
            case 16:
                genres.push("Animation");
                break
            case 35:
                genres.push("Comedy");
                break
            case 80:
                genres.push("Crime");
                break
            case 99:
                genres.push("Documentary");
                break
            case 18:
                genres.push("Drama");
                break
            case 10751:
                genres.push("Family");
                break
            case 14:
                genres.push("Fantasy");
                break
            case 36:
                genres.push("History");
                break
            case 27:
                genres.push("Horror");
                break
            case 10402:
                genres.push("Music");
                break
            case 9648:
                genres.push("Mystery");
                break
            case 10749:
                genres.push("Romance");
                break
            case 878:
                genres.push("Science Fiction");
                break
            case 10770:
                genres.push("TV Movie");
                break
            case 53:
                genres.push("Thriller");
                break
            case 10752:
                genres.push("War");
                break
            case 37:
                genres.push("Western");
                break
        }
    }

    const navigate = useNavigate();
    const id = movie.id
    const data = {movie, genres}
       return (
        <div>
            <div onClick={() => navigate(`${id}`, {state: {data}})}>
                <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                <div>
                    <div><StarsRating rating={movie.vote_average}/></div>
                    <div>{movie.release_date.slice(0,-6)}</div>
                    <div>{genres.map((genre, index) => <GenreForMovie key={index} name={genre}/>)} </div>

                </div>
            </div>
        </div>
    );
}

export {Movie}