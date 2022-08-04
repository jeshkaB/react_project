import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {moviesByGenreActions} from "../../redux";
import './MoviesByGenreStyle.css'
import {MovieByGenreById} from "./MovieByGenreById";

function MovieListByGenre() {
    const {theme} = useSelector(state => state.theme)
    const {state} = useLocation()

    const id = state.id
    const name = state.name

    const {moviesByGenre} = useSelector(state => state.moviesByGenre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesByGenreActions.getAllByGenre({id}))
    }, [id])


    return (
        <div>
            <div className={`HeaderG_${theme}`}> <b>{`Most popular movies by ${name}`}</b></div>
            <div className={'Movies'}> {moviesByGenre.map(movie => <MovieByGenreById key={movie.id} movie={movie}/>)}</div>
        </div>
    );
}


export {MovieListByGenre}