import './HeaderStyle.css'
import {Genres} from "../Genres";
import {Link} from "react-router-dom";
import {ToggleTheme} from "../ToggleTheme";
import {useSelector} from "react-redux";
import {UserInfo} from "../UserInfo";

function Header(props) {
    const {theme} = useSelector(state => state.theme)
    return (
        <div>
            <div className={`Header_${theme}`}>
                <div className={'LinkHome'}> <Link to={'/movies'}> <button>Back to movie list</button> </Link></div>
                <Genres/>
                <div className={'ToddleBlock'}><h3>dark</h3><ToggleTheme/><h3>light</h3></div>
                <UserInfo/>
            </div>
        </div>
    );
}

export {Header};