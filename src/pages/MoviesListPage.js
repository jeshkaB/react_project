// import MoviesListCard from "../components/MoviesListCard/MoviesListCard";
import {Outlet} from 'react-router-dom'
import {MoviesList} from "../components/MoviesList";

function MoviesListPage(props) {
    return (
        <div>
            <MoviesList/>
            <Outlet/>
        </div>
    );
}

export {MoviesListPage}