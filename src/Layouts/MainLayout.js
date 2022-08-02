import {Outlet} from 'react-router-dom';

import {Header} from "../components/Header";
// import {MoviesListPage} from "../pages";

function MainLayout(props) {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout}