import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import './DetailsByIdStyle.css';
// import {Videos} from "../Videos";

function DetailsById({id}) {
    const {theme} = useSelector(state => state.theme);
    const {movie} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieById(id))
    }, [id])


    return (
        <div>
            {/*<div className={'Trailer'}> <Videos videosList={movie.videos.results}/></div>*/}
            <div> <a className={`HomepageHref_${theme}`} href={movie.homepage} target={"_blank"}> Movie homepage </a></div>

        </div>
    );
}


export {DetailsById}