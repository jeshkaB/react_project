import {useLocation} from "react-router-dom";
import {imageBaseURL} from "../constants";

function MovieListCardPage(props) {
    const {state} = useLocation()

    return (
        <div>
            <div>{state.title}</div>
            <img src={`${imageBaseURL}${state.poster_path}`} alt={`poster ${state.title}`}/>
             <div>{state.overview}</div>
        </div>
    );
}

export {MovieListCardPage}