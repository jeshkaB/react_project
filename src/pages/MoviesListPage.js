import {Outlet} from 'react-router-dom'
import {useSelector} from "react-redux";

import {MoviesList} from "../components/MoviesList";
import './PageStyle.css'

function MoviesListPage(props) {

    const {theme} = useSelector(state => state.theme)

    return (
        <div className={`Main_${theme}`}>
            <MoviesList/>
            <Outlet/>
        </div>
    );
}

export {MoviesListPage}