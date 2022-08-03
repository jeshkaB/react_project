
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux";
import ReactSwitch from "react-switch";


function ToggleTheme(props) {
    const {theme} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(themeActions.changeTheme(theme==='dark'? 'light': 'dark'))
    }
    return (
        <div>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'light'}/>
        </div>
    );
}

export {ToggleTheme}