import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MovieListCardPage, MoviesListPage} from "./pages";
import {MainLayout} from "./Layouts";


function App() {
    return (
        <Routes >
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'/movies'} element={<MoviesListPage/>}/>
                <Route path={'/movies/:id'} element={<MovieListCardPage/>}/>
            </Route>


        </Routes>
    );
}

export default App;
