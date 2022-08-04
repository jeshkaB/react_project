import css from './GenreForMovie.module.css'

function GenreForMovie({name}) {

    return (
        <div className={css.GenreName}>
            {name}
        </div>
    );
}

export {GenreForMovie}