import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MovieCardPage, MoviesListPage} from "./pages";
import {MainLayout} from "./Layouts";
import {MoviesListByGenrePage} from "./pages/MoviesListByGenrePage";


function App() {
    return (
        <Routes >
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'/movies'} element={<MoviesListPage/>}/>
                <Route path={'/movies/byGenre/:id'} element={<MoviesListByGenrePage/>}/>
                <Route path={'/movies/:id'} element={<MovieCardPage/>}/>
            </Route>


        </Routes>
    );
}

export default App;
