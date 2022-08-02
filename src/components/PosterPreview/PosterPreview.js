import {imageBaseURL} from "../../constants";
import css from './PosterPrewiew.module.css'
function PosterPreview({poster_path, title}) {
    return (
        <div>
            <img className={css.PosterImg} src={`${imageBaseURL}${poster_path}`} alt={`poster ${title}`}/>
        </div>
    );
}

export {PosterPreview}