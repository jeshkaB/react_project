import css from './GenreBadge.module.css';

function GenreBadge({genre}) {
    return (
        <div className={css.GenreName}>
             <div>{genre.name}</div>
        </div>
    );
}

export {GenreBadge};