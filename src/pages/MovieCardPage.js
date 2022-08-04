import {useSelector} from "react-redux";

import './PageStyle.css'
import MovieCard from "../components/MovieCard/MovieCard";


function MovieCardPage(props) {

    const {theme} = useSelector(state => state.theme)

    return (
        <div className={`Main_${theme}`}>
            <MovieCard/>
        </div>
    );
}

export {MovieCardPage}