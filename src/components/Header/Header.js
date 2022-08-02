import css from './Header.module.css'
import {Genres} from "../Genres";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <div className={css.Header}>
                <div className={css.LinkHome}> <Link to={'/movies'}> Back to аll movies list</Link></div>

                <Genres/>
            </div>
        </div>
    );
}

export {Header};