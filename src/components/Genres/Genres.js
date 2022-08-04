import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Genre} from "../Genre";
import {genresActions} from "../../redux";
import './GenresStyle.css'

function Genres() {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAll())
    },[])

   return (
        <div className={'GenresList'}>
             {genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
}

export {Genres};