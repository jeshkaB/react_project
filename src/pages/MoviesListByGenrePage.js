import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {MovieListByGenre} from "../components/MovieListByGenre";
import './PageStyle.css'

function MoviesListByGenrePage(props) {

    const {theme} = useSelector(state => state.theme)

    return (
        <div className={`Main_${theme}`}>
            <MovieListByGenre/>
            <Outlet/>
        </div>
    );
}

export {MoviesListByGenrePage}