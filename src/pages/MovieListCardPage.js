import {MovieListCard} from "../components/MoviesListCard";
import {useSelector} from "react-redux";
import './PageStyle.css'

function MovieListCardPage(props) {

    const {theme} = useSelector(state => state.theme)
      return (
        <div className={`Main_${theme}`}>
            <MovieListCard/>
        </div>
    );
}

export {MovieListCardPage}