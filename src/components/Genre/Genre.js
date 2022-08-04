import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import './GenreStyles.css'

function Genre({genre}) {
    const {theme} = useSelector(state => state.theme)
    const navigate = useNavigate();

    const id = genre.id
    const name = genre.name

    return (
        <div className={'GenreName'}>
             <button className={`GenreButton_${theme}`} onClick={() => navigate(`/movies/byGenre/${id}`, {state: {id,name}})}>{genre.name}</button>
        </div>
    );
}

export {Genre};