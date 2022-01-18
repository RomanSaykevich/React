import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import UserPage from "./Pages/UserPage/UserPage";
import PostPage from "./Pages/PostPage/PostPage";
import Collection from "./Components/Collection/Collection";
import UserDetailsPage from "./Pages/DetailsPage/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./Pages/DetailsPage/PostDetailsPage/PostDetailsPage";


const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Collection/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UserPage/>}>
                        <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
                    </Route>
                    <Route path={'/posts'} element={<PostPage/>}>
                        <Route path={'/posts/:id'} element={<PostDetailsPage/>}/>
                    </Route>
                </Route>

            </Routes>
        </div>

    );
};

export default App;
