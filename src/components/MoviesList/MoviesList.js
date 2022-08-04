import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie";
import {moviesActions} from "../../redux";
import './MoviesStyle.css'

function MoviesList(props) {

    const {movies} = useSelector(state => state.movies);
    const {theme} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(moviesActions.getAll({page:query.get('page')}))
    }, [dispatch,query])

    const prevPage = ()=>{
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    }
    const nextPage = ()=>{
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    }

    return (
        <div>
            <button className={`PageButton_${theme}`} disabled={+query.get('page')===1} onClick={prevPage}>Prev</button>
            <button className={`PageButton_${theme}`} onClick={nextPage}>Next</button>
            <div className={'Movies'}> {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
        </div>
    );
}


export {MoviesList}