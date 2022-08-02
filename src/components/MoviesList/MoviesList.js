import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie";
import {moviesActions} from "../../redux";
import css from './MoviesList.module.css'


function MoviesList(props) {

    const {movies,prev,next} = useSelector(state => state.movies);
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
            <button disabled={+query.get('page')===1} onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            <div className={css.Movies}> {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
        </div>
    );
}


export {MoviesList}