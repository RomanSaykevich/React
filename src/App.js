import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import UserPage from "./Pages/UserPage/UserPage";
import PostPage from "./Pages/PostPage/PostPage";
import Collection from "./Components/Collection/Collection";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Collection/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/posts'} element={<PostPage/>}/>
                </Route>

            </Routes>
        </div>

    );
};

export default App;
