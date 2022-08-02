import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {GenreBadge} from "../GenreBadge";
import {genresActions} from "../../redux";



function Genres() {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAll())
    },[])
   return (
        <div>
            GENRES
            {genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
}



export {Genres};