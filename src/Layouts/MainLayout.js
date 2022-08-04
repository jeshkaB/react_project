import {Outlet} from 'react-router-dom';

import {Header} from "../components/Header";


function MainLayout(props) {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout}