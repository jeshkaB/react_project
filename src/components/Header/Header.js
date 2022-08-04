import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {Genres} from "../Genres";
import {ToggleTheme} from "../ToggleTheme";
import {UserInfo} from "../UserInfo";
import './HeaderStyle.css'

function Header(props) {
    const {theme} = useSelector(state => state.theme)

    return (
        <div>
            <div className={`Header_${theme}`}>
                <div className={'LinkHome'}> <Link to={'/movies'}> <button className={`BackButton_${theme}`}>Back to movie list</button> </Link></div>
                <div><Genres/></div>
                <div className={'ToddleBlock'}><h3>dark</h3><ToggleTheme/><h3>light</h3></div>
                <UserInfo/>
            </div>
        </div>
    );
}

export {Header};