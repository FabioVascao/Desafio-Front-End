import {Routes, Route} from 'react-router-dom';
import {Home} from "../pages/Home";
import {MoviePreview} from "../pages/Moviepreview";
import {NewMovie} from "../pages/Newmovie";
import {Profile} from "../pages/Profile";

export function AppRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/new" element={<NewMovie/>}/>
            <Route path ="/movie" element={<MoviePreview/>}/>
            <Route path ="/profile" element={<Profile/>}/>
        </Routes>
    )
}